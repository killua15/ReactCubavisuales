// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import routes from '../constants/routes';
import styles from './CardMaterial.css';
type Props = {};

export default class GridMaterials extends Component<Props> {
  props: Props;
  componentDidMount() {}
  render() {
    // console.log(this.props)

    return (
      <div className={styles.card}>
        {/* <img src={require('../../img/120_battements_par_minute-901851561-mmed.jpg')} /> */}
        <div className={styles.container}>
          <h6>
            <b>Titulo de las peliculas</b>
          </h6>
        </div>
      </div>
    );
  }
}
