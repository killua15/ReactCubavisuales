// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Home.css';
import MenuNav from './NavMenu';
import GridMaterials from './Grids/GridMaterials';

import * as getMaterialesPortadaJson from '../actions/homeActionPortada';
type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  componentDidMount() {}
  render() {
    console.log('Llego');
    return (
      <div>
        <div className="btn btn_red">
          <a href="#">Atras</a>
        </div>
      </div>
    );
  }
}
