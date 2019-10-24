// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';
import routes from '../constants/routes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TiposMateriales from '../utils/getDataJsonAllType';
import Annos from '../utils/getAnnos';
import JsonPaises from '../utils/getPaises';
import JsonGenero from '../utils/getGeneros';
import 'antd/dist/antd.css';
import styles from './NavMenu.css';
import { from } from 'rxjs';
import SearchInput from './SearchInput';
import {
  Icon,
  Button,
  Form,
  Select,
  Header,
  Grid,
  Input,
  Modal
} from 'semantic-ui-react';
//import './index.css';
import * as getAllTypeMaterialsActions from '../actions/getAllTypeMaterials';
type Props = {};
class NavMenu extends Component<Props> {
  props: Props;
  state = {
    titulo: '',
    id_tipo_material: '',
    anno: '',
    actor: '',
    director: '',
    pais: '',
    genero: '',
    open: false,
    size: 'large',
    tiposM: [],
    losA: [],
    losPaises: [],
    arrayMyGeneros: []
  };
  componentDidMount() {
    //this.setState({ titulo: 'asd' });
    this.props.getAlltypeMaterialsJson();
    var arrayMysTipos = [];
    var arrayAnnos = [];
    var arrayPaises = [];
    var arrayMyGeneros = [];
    TiposMateriales().then(e => {
      console.log(e);
      e.map(e => {
        arrayMysTipos.push({
          key: e.id_tipo_material,
          text: e.tipo_material,
          value: e.id_tipo_material
        });
      });
    });
    JsonGenero().then(e => {
      console.log(e);
      e.map(e => {
        arrayMyGeneros.push({
          key: e.id_genero,
          text: e.genero,
          value: e.genero
        });
      });
    });
    Annos().map(el => {
      arrayAnnos.push({
        key: el.id,
        text: el.anno,
        value: el.id
      });
    });
    JsonPaises().map(el => {
      console.log(el);
      arrayPaises.push({
        key: el.alpha2Code,
        text: el.name,
        value: el.name
      });
      this.setState({ tiposM: arrayMysTipos });
      this.setState({ losA: arrayAnnos });
      this.setState({ losPaises: arrayPaises });
      this.setState({ arrayMyGeneros: arrayMyGeneros });
    });
  }
  tituloOnChange = e => {
    console.log(e.target.value);
    this.setState({ titulo: e.target.value });
  };
  categoriaOnChange = (e, data) => {
    console.log(e.selection);
    console.log(data.value);

    this.setState({ id_tipo_material: data.value });
  };
  AnnoOnChange = (e, data) => {
    console.log(e.selection);
    console.log(data.value);

    this.setState({ anno: data.value });
  };
  ActorOnChange = e => {
    console.log(e.target.value);
    this.setState({ actor: e.target.value });
  };
  directorOnChange = e => {
    console.log(e.target.value);
    this.setState({ director: e.target.value });
  };
  paisesOnChange = (e, data) => {
    console.log(e.selection);
    console.log(data.value);

    this.setState({ pais: data.value });
  };
  generoOnChange = (e, data) => {
    console.log(e.selection);
    console.log(data.value);

    this.setState({ genero: data.value });
  };
  showModal = () => {
    this.setState({
      titulo: '',
      id_tipo_material: '',
      anno: '',
      actor: '',
      director: '',
      pais: '',
      genero: ''
    });
    this.setState({ open: true });
  };

  close = () => this.setState({ open: false });
  rendertipomateriales = () => {
    return this.props.getAllTypeMaterialsReducer.data.map(e => {
      return (
        <Link
          key={e['id_tipo_material']}
          className={styles.alinkDrop}
          to={{
            pathname: `/listMaterialByFilter:${e['id_tipo_material']}`,
            state: { id: e['id_tipo_material'] }
          }}
        >
          {e['tipo_material']}
        </Link>
      );
    });
  };
  SearchAction = e => {
    if (e.key === 'Enter') {
      console.log('do validate');
      this.setState({ titulo: value.target.value });
    }
  };

  mySearch = value => {
    console.log(value.target.value);
    var items = [];
    var busqueda = '';
    var i = 0;
    // debugger;
    items = value.target.value.split(' ');
    items.map(e => {
      i++;
      if (e !== '') {
        busqueda = busqueda + e + ' ';
      }
    });
    var busqueda = busqueda.slice(0, busqueda.length - 1);
    if (value.target.value !== ' ') {
      this.setState({ titulo: busqueda });
    }
  };
  renderButton = titulo => {
    var math = Math.random(1, 30);
    return (
      <Link
        className={styles.myLink}
        to={{
          pathname: `/search:${math}`,
          state: { state: this.state }
        }}
      >
        <i className="fa fa-search" />
      </Link>
    );
  };
  renderButtonAdv = titulo => {
    var math = Math.random(1, 30);
    return (
      <Link
        className={styles.linkBuscar}
        to={{ pathname: `/search:${math}`, state: { state: this.state } }}
      >
        Buscar
      </Link>
    );
  };
  render() {
    console.log(this.state);

    const { isFeching } = this.props.getAllTypeMaterialsReducer;
    if (isFeching == false) {
      // console.log( this.props.getAllTypeMaterialsReducer.data)
    }
    return (
      <div className={styles.header}>
        <div className={styles.topnav} id="mytopnav">
          <Link to={routes.HOME}>INICIO</Link>

          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              CATEGORIAS <i className="fa fa-caret-down" />
            </button>
            <div className={styles.dropdownContent}>
              {/* {
              
              tipoMateriales.map(el => {
                var i = 0;
                return (
                  <Link to={routes.COUNTER}>
                  <a  href="#home">{i}</a>
                </Link>
                )
                i++
              })
            } */
              isFeching == false ? this.rendertipomateriales() : null // <a  href="#home">{6}</a>
              }
            </div>
          </div>
          <Link to="/oferta">OFERTA</Link>
          <Link to="/contacto">CONTACTO</Link>

          <div>
            {this.state.titulo !== ''
              ? this.renderButton(this.state.titulo)
              : this.renderButton('')}
            <input
              className={styles.myInput}
              type="text"
              placeholder="Buscar por Titulo"
              onChange={val => this.mySearch(val)}
              onKeyPress={this.SearchAction}
            />
          </div>
          <a onClick={() => this.showModal('large')} className={styles.alinkB}>
            Busqueda Avanzada
          </a>
        </div>
        {this.props.children}
        <Modal
          size={this.state.size}
          open={this.state.open}
          onClose={() => this.close()}
        >
          <Modal.Header>Busqueda Avanzada</Modal.Header>
          <Modal.Content>
            <Grid divided="vertically">
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Input
                    clearable
                    onChange={e => this.tituloOnChange(e)}
                    fluid
                    placeholder="Titulo"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field
                    clearable
                    fluid
                    control={Select}
                    options={
                      this.state.tiposM //label="Tipo de Material"
                    }
                    onChange={(e, data) => this.categoriaOnChange(e, data)}
                    placeholder="Tipo de Material"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Field
                    clearable
                    fluid
                    control={Select}
                    options={
                      this.state.losA //label="Tipo de Material"
                    }
                    onChange={(e, data) => this.AnnoOnChange(e, data)}
                    placeholder="Annos"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Input
                    clearable
                    onChange={e => this.ActorOnChange(e)}
                    fluid
                    placeholder="Actor"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Input
                    clearable
                    onChange={e => this.directorOnChange(e)}
                    fluid
                    placeholder="Director"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Field
                    clearable
                    fluid
                    control={Select}
                    options={
                      this.state.losPaises //label="Tipo de Material"
                    }
                    onChange={(e, data) => this.paisesOnChange(e, data)}
                    placeholder="Paises"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Field
                    clearable
                    fluid
                    control={Select}
                    options={
                      this.state.arrayMyGeneros //label="Tipo de Material"
                    }
                    onChange={(e, data) => this.generoOnChange(e, data)}
                    placeholder="Generos"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className={styles.alinkButon}>
              <Button onClick={() => this.close()} color="red">
                Cancel
              </Button>
              <Button color="blue">{this.renderButtonAdv()}</Button>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    getAllTypeMaterialsReducer: state.getAllTypeMaterialsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(getAllTypeMaterialsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
