// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import routes from '../constants/routes';
import styles from './GridMaterials.css';
import CardMateriales from './CardMaterial';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import * as getMaterialesPortadaAction from '../../actions/homeActionPortada';
import * as getMaterialesFilterAction from '../../actions/getFilterMateriales';
import jsonTiposMaterial from '../../utils/getDataJsonAllType';
import PaginacionTabla from '../PaginacionTabla';
import { Pagination } from 'semantic-ui-react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import ListActors from '../ListActors';
import ListLetras from '../ListLetras';
type Props = {};
const fs = require('fs');
const path = require('path');
//import Modal from '../Modal';
class GridMaterials extends Component<Props> {
  props: Props;
  state = {
    isShowing: false,
    myElementMaterial: {},
    img: '',
    intervalId: 0,
    tipoMaterial: '',
    currentPage: 1,
    todosPerPage: 60,
    activePage: 1,
    open: false,
    size: 'large',
    boundaryRange: 1,
    letter: '',
    totalPagesPaginator: 1
  };
  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });
  getTipoMaterial = valType => {
    return jsonTiposMaterial()
      .then(el => {
        return el.find(e => {
          // console.log(e);
          if (e.id_tipo_material === valType) {
            return e.tipo_material;
          }
        });
      })
      .catch(el => {
        console.log(el);
      });
  };
  onchangeLetter = letter => {
    console.log(letter);
    this.setState({ letter: letter });
  };
  onPageChange = (event, { activePage }) => {
    console.log(event);
    console.log(activePage);
    this.setState({ activePage: activePage });
  };

  onPageChange2 = event => {
    this.setState({
      first2: event.first,
      rows2: event.rows
    });
  };
  handleClick = event => {
    console.log(event.target.id);
    this.setState({
      currentPage: Number(event.target.id)
    });
  };
  scrollStep() {
    // if (window.pageYOffset === 0) {
    //   clearInterval(this.state.intervalId);
    // }
  }

  scrollToTop() {
    console.log(document);
  }
  openModal(elemnt, img, tipoMaterial) {
    console.log(elemnt);
    console.log(img);
    this.setState({
      isShowing: true,
      myElementMaterial: elemnt,
      img: img,
      tipoMaterial: tipoMaterial,
      open: true
    });
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  closeModal = () => {
    this.setState({ isShowing: false });
  };
  shouldComponentUpdate(nP, nS) {
    if (
      JSON.stringify(this.state.currentPage) !== JSON.stringify(nS.currentPage)
    ) {
      this.props.actions.getMaterialesFilterAction.getFilterMaterialesJson(
        nP.filtros
      );
    }
    if (JSON.stringify(this.props.filtros) !== JSON.stringify(nP.filtros)) {
      if (
        this.props.categoria === 'Filter' ||
        this.props.categoria === 'FilterNav' ||
        this.props.categoria === 'FilterSearch'
      ) {
        this.setState({ letter: '' });
        this.props.actions.getMaterialesFilterAction.getFilterMaterialesJson(
          nP.filtros
        );
      }
    }

    return true;
  }
  componentDidMount() {
    console.log(this.props);
    if (
      this.props.categoria === 'Filter' ||
      this.props.categoria === 'FilterNav' ||
      this.props.categoria === 'FilterSearch'
    ) {
      this.props.actions.getMaterialesFilterAction.getFilterMaterialesJson(
        this.props.filtros
      );
    } else {
      this.props.actions.getMaterialesPortadaAction.getMaterialesPortadaJson();
    }
  }
  text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  renderCards = () => {
    if (this.props.categoria === 'Clasicos') {
      return this.props.getMaterialesPortadaReducer.data[1]
        .slice(0, 30)
        .map(e => {
          try {
            // const ima = require(`../../img/${e.imagen}`);
            //console.log(this.props);
            const directoryPath = path.join(__dirname, 'img');
            //console.log(directoryPath);
            var img = [];

            // alert(process.argv[5].split('=')[1]);
            if (fs.statSync(`${directoryPath}/${e.imagen}`).isFile()) {
              let img = fs.readFileSync(`${directoryPath}/${e.imagen}`);
              //  console.log(Buffer.from(img).toString('base64'));
              var imagen64 = Buffer.from(img).toString('base64');
              var myElement = e;
              var tipoMaterial;
              this.getTipoMaterial(myElement.id_tipo_material).then(el => {
                console.log(el.tipo_material);
                tipoMaterial = el.tipo_material;
              });
              return (
                <div
                  onClick={() =>
                    this.openModal(myElement, imagen64, tipoMaterial)
                  }
                  className={styles.columna}
                >
                  <div className={styles.pleca2}>
                    <img src={`data:image/gif;base64,${imagen64}`} />
                  </div>
                  <h6 className={styles.title}>
                    {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
                  </h6>
                </div>
              );
            }
          } catch (el) {
            //alert(`${directoryPath}/${e.imagen}`);
            return (
              <div className={styles.columna}>
                <div className={styles.pleca2}>
                  {/* <img src={`data:image/gif;base64,${imagen64}`} /> */}
                </div>
                {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
              </div>
            );
          }
        });
    } else if (this.props.categoria === 'FilterSearch') {
      if (this.state.letter !== '') {
        var arrayByLetter = [];
        this.props.getMaterialesFilterReducer.data.map(e => {
          if (
            e.titulo.trim()[0].toLowerCase() === this.state.letter.toLowerCase()
          )
            arrayByLetter.push(e);
        });
        var p = Math.ceil(arrayByLetter.length / this.state.todosPerPage) - 1;
        // this.setState({ totalPagesPaginator: p });
        return arrayByLetter
          .slice(
            (this.state.activePage - 1) * this.state.todosPerPage,
            this.state.activePage * this.state.todosPerPage
          )
          .map(e => {
            try {
              // const ima = require(`../../img/${e.imagen}`);
              // console.log(this.props);
              const directoryPath = path.join(__dirname, 'img');
              //  console.log(directoryPath);
              var img = [];
              if (fs.statSync(`${directoryPath}/${e.imagen}`).isFile()) {
                let img = fs.readFileSync(`${directoryPath}/${e.imagen}`);
                //   console.log(Buffer.from(img).toString('base64'));
                var imagen64 = Buffer.from(img).toString('base64');
                var myElement = e;
                var tipoMaterial;
                this.getTipoMaterial(myElement.id_tipo_material).then(el => {
                  console.log(el.tipo_material);
                  tipoMaterial = el.tipo_material;
                });
                // alert(process.argv);
                return (
                  <div
                    onClick={() =>
                      this.openModal(myElement, imagen64, tipoMaterial, 'large')
                    }
                    className={styles.columna}
                  >
                    <div className={styles.pleca2}>
                      <img src={`data:image/gif;base64,${imagen64}`} />
                    </div>
                    <h6 className={styles.title}>
                      {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
                    </h6>
                  </div>
                );
              }
            } catch (el) {
              //alert(`${directoryPath}/${e.imagen}`);
              return (
                <div className={styles.columna}>
                  <div className={styles.pleca2}>
                    {/* <img src={`data:image/gif;base64,${imagen64}`} /> */}
                  </div>
                  {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
                </div>
              );
            }
          });
      } else {
        return this.props.getMaterialesFilterReducer.data
          .slice(
            (this.state.activePage - 1) * this.state.todosPerPage,
            this.state.activePage * this.state.todosPerPage
          )
          .map(e => {
            try {
              // const ima = require(`../../img/${e.imagen}`);
              // console.log(this.props);
              const directoryPath = path.join(__dirname, 'img');
              //  console.log(directoryPath);
              var img = [];
              if (fs.statSync(`${directoryPath}/${e.imagen}`).isFile()) {
                let img = fs.readFileSync(`${directoryPath}/${e.imagen}`);
                //   console.log(Buffer.from(img).toString('base64'));
                var imagen64 = Buffer.from(img).toString('base64');
                var myElement = e;
                var tipoMaterial;
                this.getTipoMaterial(myElement.id_tipo_material).then(el => {
                  console.log(el.tipo_material);
                  tipoMaterial = el.tipo_material;
                });
                // alert(process.argv);
                return (
                  <div
                    onClick={() =>
                      this.openModal(myElement, imagen64, tipoMaterial, 'large')
                    }
                    className={styles.columna}
                  >
                    <div className={styles.pleca2}>
                      <img src={`data:image/gif;base64,${imagen64}`} />
                    </div>
                    <h6 className={styles.title}>
                      {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
                    </h6>
                  </div>
                );
              }
            } catch (el) {
              //alert(`${directoryPath}/${e.imagen}`);
              return (
                <div className={styles.columna}>
                  <div className={styles.pleca2}>
                    {/* <img src={`data:image/gif;base64,${imagen64}`} /> */}
                  </div>
                  {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
                </div>
              );
            }
          });
      }
    } else {
      return this.props.getMaterialesPortadaReducer.data[0]
        .slice(0, 60)
        .map(e => {
          try {
            // const ima = require(`../../img/${e.imagen}`);
            console.log(this.props);
            console.log(process.argv);
            const directoryPath = path.join(__dirname, 'img');
            console.log(directoryPath);
            var img = [];
            if (fs.statSync(`${directoryPath}/${e.imagen}`).isFile()) {
              let img = fs.readFileSync(`${directoryPath}/${e.imagen}`);
              //  console.log(Buffer.from(img).toString('base64'));
              var imagen64 = Buffer.from(img).toString('base64');
              var myElement = e;
              var tipoMaterial;
              this.getTipoMaterial(myElement.id_tipo_material).then(el => {
                console.log(el.tipo_material);
                tipoMaterial = el.tipo_material;
              });
              //  alert(process.argv);
              return (
                <div
                  onClick={() =>
                    this.openModal(myElement, imagen64, tipoMaterial)
                  }
                  className={styles.columna}
                >
                  <div className={styles.pleca2}>
                    <img src={`data:image/gif;base64,${imagen64}`} />
                  </div>
                  <h6 className={styles.title}>
                    {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
                  </h6>
                </div>
              );
            }
          } catch (el) {
            return (
              <div className={styles.columna}>
                <div className={styles.pleca2}>
                  {/* <img src={`data:image/gif;base64,${imagen64}`} /> */}
                </div>
                {this.text_truncate(e.titulo + ' (' + e.anno + ')', 45)}
              </div>
            );
          }
        });
    }
  };
  render() {
    const { isFeching } = this.props.getMaterialesPortadaReducer;
    console.log(isFeching);
    console.log(this.props);
    const pageNumbers = [];
    var total = 0;

    for (
      let i = 1;
      i <=
      Math.ceil(
        this.props.getMaterialesFilterReducer.data.length /
          this.state.todosPerPage
      );
      i++
    ) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });
    if (this.state.letter !== '') {
      var arrayByLetter = [];
      this.props.getMaterialesFilterReducer.data.map(e => {
        if (
          e.titulo.trim()[0].toLowerCase() === this.state.letter.toLowerCase()
        )
          arrayByLetter.push(e);
      });
      var p = Math.ceil(arrayByLetter.length / this.state.todosPerPage) - 1;
      total = p;
    } else {
      var p =
        Math.ceil(
          this.props.getMaterialesFilterReducer.data.length /
            this.state.todosPerPage
        ) - 1;
      total = p;
    }

    return (
      <div className={styles.fixSpace}>
        <h4>
          {this.props.categoria === 'Clasicos' ||
          this.props.categoria === 'Ultimos Agregados' ? (
            this.props.categoria
          ) : (
            <ListLetras
              onChangeLetter={letter => this.onchangeLetter(letter)}
            />
          )}
        </h4>
        {/* {this.props.categoria !== 'Clasicos' ||
        this.props.categoria !== 'Ultimos Agregados' ? (
          <ListLetras onChangeLetter={letter => this.onchangeLetter(letter)} />
        ) : null} */}

        <div className={styles.wrapper}>
          {isFeching == false ? this.renderCards() : null // <a  href="#home">{6}</a>
          }
        </div>

        <Modal open={this.state.open} onClose={this.close}>
          <Modal.Header />
          <Modal.Content>
            <div className={styles.mainModalConten}>
              <div className={styles.mainDescription}>
                <img
                  className={styles.imageModal}
                  src={`data:image/gif;base64,${this.state.img}`}
                />
                <div className={styles.primeraDesc}>
                  <h4>{this.state.myElementMaterial.titulo}</h4>
                  <div className={styles.myD}>
                    <h6>Año:</h6>
                    <h6>{this.state.myElementMaterial.anno}</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Categoria:</h6>
                    <h6>{this.state.tipoMaterial}</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Duración:</h6>
                    <h6>{this.state.myElementMaterial.duracion} min</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Nacionalidad:</h6>
                    <h6>{this.state.myElementMaterial.pais}</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Tamaño:</h6>
                    <h6>{this.state.myElementMaterial.tamano} GB</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Director:</h6>
                    <h6>{this.state.myElementMaterial.director}</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Generos:</h6>
                    <h6>{this.state.myElementMaterial.generos}</h6>
                  </div>
                  <div className={styles.myD}>
                    <h6>Precio:</h6>
                    <h6>{this.state.myElementMaterial.precio}$ MN</h6>
                  </div>
                </div>
              </div>
              <div className={styles.mainDescription} />
              <div className={styles.myD}>
                <h6>Sinopsis:</h6>
                <h6>{this.state.myElementMaterial.sinopsis}</h6>
              </div>
              <div className={styles.myD}>
                <div>
                  <h6>Reparto:</h6>
                  <ListActors reparto={this.state.myElementMaterial.reparto} />
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>

        {this.props.categoria === 'FilterSearch' && total > 1 ? (
          <div className={styles.Pagina}>
            <Pagination
              activePage={this.activePage}
              defaultActivePage={1}
              totalPages={total}
              onPageChange={this.onPageChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    getMaterialesPortadaReducer: state.getMaterialesPortadaReducer,
    getMaterialesFilterReducer: state.getMaterialesFilterReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMaterialesPortadaAction: bindActionCreators(
        getMaterialesPortadaAction,
        dispatch
      ),
      getMaterialesFilterAction: bindActionCreators(
        getMaterialesFilterAction,
        dispatch
      )
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridMaterials);
