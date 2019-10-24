import React, { Component } from 'react';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavMenu from '../components/NavMenu';
import GridMaterials from '../components/Grids/GridMaterials';
import styles from '../components/Home.css';
const buttonStyles = {
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '1em',
  padding: 10,
  margin: 5,
  width: 70
};
export default class ListMaterialSearch extends Component<Props> {
  props: Props;
  state = {
    titulo: '',
    id_tipo_material: '',
    anno: '',
    actor: '',
    director: '',
    pais: '',
    genero: '',
    reparto: '',
    itemsperpage: 50,
    tipoVista: ''
  };

  shouldComponentUpdate(nP, nS) {
    console.log(nP.location.state.state);
    console.log(nS);
    if (JSON.stringify(this.props) !== JSON.stringify(nP)) {
      if (nP.location.state.id) {
        this.setState({
          titulo: '',
          id_tipo_material: nP.location.state.id,
          anno: '',
          actor: '',
          director: '',
          pais: '',
          genero: ''
        });
      } else {
        this.setState({
          titulo: nP.location.state.state.titulo,
          id_tipo_material: nP.location.state.state.id_tipo_material,
          anno: nP.location.state.state.anno,
          actor: nP.location.state.state.actor,
          director: nP.location.state.state.director,
          pais: nP.location.state.state.pais,
          genero: nP.location.state.state.genero
        });
      }
    }
    return true;
  }
  componentWillMount() {
    console.log(this.props.location.state);
    if (this.props.location.state.id) {
      this.setState({
        titulo: '',
        id_tipo_material: this.props.location.state.id,
        anno: '',
        actor: '',
        director: '',
        pais: '',
        genero: ''
      });
    } else {
      console.log(this.props.location.state.state);
      this.setState({
        titulo: this.props.location.state.state.titulo,
        id_tipo_material: this.props.location.state.state.id_tipo_material,
        anno: this.props.location.state.state.anno,
        actor: this.props.location.state.state.actor,
        director: this.props.location.state.state.director,
        pais: this.props.location.state.state.pais,
        genero: this.props.location.state.state.genero
      });
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.state);
    return (
      <div className={styles.container}>
        <NavMenu />
        <GridMaterials
          className={styles.materilaGrid}
          categoria="FilterSearch"
          filtros={this.state}
        />
      </div>
    );
  }
}
