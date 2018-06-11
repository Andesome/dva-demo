import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ example }) => ({
  example
}))
export default class Test extends Component {
  render() {
    console.log('Test组建', this.props)
    return (
      <div>
        测试页面
    </div >
    )
  }
}
