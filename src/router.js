import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getRouterData } from './common/router';
import BasicLayout from './layouts/BasicLayout';
import IndexPage from './routes/IndexPage';


function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const BasicLayout = routerData['/'].component;

  console.log('路由配置', routerData)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={props => <BasicLayout {...props} />} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
