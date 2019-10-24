// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header, List, Divider, Container } from 'semantic-ui-react';
import styles from '../components/Oferta.css';
import NavMenu from '../components/NavMenu';
export default class HomePage extends Component<Props> {
  props: Props;
  render() {
    return (
      <div className={styles.oferta_container}>
        <NavMenu />
        <Container className={styles.oferta_containerContacto} text>
          <List>
            <List.Item>Teléfono: +53 72078456</List.Item>
            <List.Item>Móvil: +53 52940703</List.Item>
            <List.Item>Nombre: Juan Carlos</List.Item>
            <Divider section />
            <List.Item>Correo: juank@cubavisuales.com</List.Item>
            <List.Item>Página Web: http://www.cubavisuales.com</List.Item>
            <List.Item>
              Dirección: Calle 58 entre 25 y 27 numero 2509 municipio Playa a 3
              cuadras de 31 y 60 Horario de atención al personal y
              telefónicamente: de lunes a sábado 10:30 am a 7:00 pm
            </List.Item>
            <Divider section />
            <List.Item> Redes Sociales:</List.Item>
            <List.Item>
              {' '}
              Canal de YouTube:
              <a href="https://bit.ly/2AHynFI"> https://bit.ly/2AHynFI</a>
            </List.Item>
            <List.Item>
              Facebook:{' '}
              <a href="http://www.facebook.com/CubavisualesJK">
                http://www.facebook.com/CubavisualesJK
              </a>
            </List.Item>
            <List.Item>
              Twitter:{' '}
              <a href="http://www.twitter.com/cubavisuales">
                http://www.twitter.com/cubavisuales
              </a>
            </List.Item>
            <Divider section />
          </List>
          También estamos en Telegram y WhatsApp Búscanos.
        </Container>
      </div>
    );
  }
}
