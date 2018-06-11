import React, { Component } from 'react';
import { Route, Switch } from 'dva/router';
import { getRoutes } from '../utils/utils';

export default class BasicLayout extends Component {
  render() {
    const { match, routerData } = this.props;
    console.log('BasicLayout', this.props)
    return (
      <div>
        <h1>BasicLayout1</h1>
        <Switch>
          {getRoutes(match.path, routerData).map(item => {
            return (
              <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
                authority={item.authority}
                redirectPath="/exception/403"
              />
            )
          }
          )}
        </Switch>
      </div>
    )
  }
}