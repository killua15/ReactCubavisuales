import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavMenu from '../components/NavMenu';
import GridMaterials from '../components/Grids/GridMaterials';
import styles from '../components/ListMaterials.css';
// import styles from '../components/Home.css';
export default class ListMaterial extends Component<Props> {
  props: Props;
  state = {
    titulo: '',
    id_tipo_material: '',
    anno: '',
    actor: '',
    director: '',
    pais: '',
    genero: ''
  };
  shouldComponentUpdate(nP, nS) {
    // debugger;
    console.log(nP.location.state);
    console.log(this.props);
    console.log(nP);
    if (JSON.stringify(this.props) !== JSON.stringify(nP)) {
      this.setState({
        titulo: nS.titulo,
        id_tipo_material: nP.location.state.id,
        anno: nS.anno,
        actor: nS.actor,
        director: nS.director,
        pais: nS.pais,
        genero: nS.pais
      });
    }
    return true;
  }
  componentWillMount() {
    console.log(this.props.location.state.id);
    let idMaterial = this.props.location.state.id;
    this.setState({ id_tipo_material: idMaterial });
  }
  componentDidMount() {
    console.log(this.props.location.state.id);
    let idMaterial = this.props.location.state.id;
    this.setState({ id_tipo_material: idMaterial });
  }
  render() {
    console.log(this.state);
    return (
      <div className={styles.container}>
        <NavMenu />
        {/* <GridMaterials
          className={styles.materilaGridClasicos}
          categoria="FilterNav"
          filtros={this.state}
        /> */}
      </div>
    );
  }
}
