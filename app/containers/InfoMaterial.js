// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Info from '../components/Info';
export default class HomePage extends Component<Props> {
  props: Props;
  render() {
    return <Info />;
  }
}
