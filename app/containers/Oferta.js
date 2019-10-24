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
        <Container className={styles.container} fluid>
          {/* <Header as="h1">Ofertas </Header> */}
          Cubavisuales es pionera en el tema exclusividad llegando a
          revolucionar el entretenimiento en cuba para clientes que no solo
          valoran la excepcional calidad del producto sino también la
          profesionalidad y responsabilidad de su equipo de trabajo el mismo que
          ha marcado una línea de visión única de la cual nos sentimos
          orgullosos y es no solo la perseverancia que nos ha llevado a hacer lo
          que nadie se ha atrevido, ni llegar donde muchos han fracasado es
          también haber logrado en más de 10 años de duro trabajo poder
          brindarle al cliente la oportunidad de poder tener en su mano lo mejor
          y más exclusivo del mercado audiovisual en toda cuba para el disfrute
          de él y su familia… Contamos con la colección más grande y de mejor
          calidad de estrenos, sagas y clásicos de toda Cuba, lo que más nos
          caracteriza es que no tenemos competencia, somos los mejores en lo que
          hacemos por lo cual le brindaremos un servicio único de calidad,
          seriedad y profesionalidad como usted se merece.
          <Divider section />
          <List>
            <List.Item>
              *Local climatizado para que su estancia sea lo más placentera
              posible
            </List.Item>
            <List.Item>*No se venden paquetes semanales</List.Item>
            <List.Item>*Los precios no son negociables</List.Item>
            <List.Item>
              *Garantía solo para PC no se aceptan devoluciones
            </List.Item>
            <List.Item>*No copiamos a memorias USB</List.Item>
            <List.Item>
              *¿Porque garantía solo para pc? pues ofrecemos la mayor parte de
              nuestra colección en alta calidad la misma se encuentra en
              formatos de video que los dvds o algunos reproductores no se
              visualizan le damos prioridad a la calidad que es lo que nos
              caracteriza.
            </List.Item>
          </List>
          <Divider section />
          <List>
            <List.Item>
              -Temporadas (25 mn) si las mismas exceden de 25 capítulos son a (2
              mn) c/u
            </List.Item>
            <List.Item>
              -Capítulos sueltos (2 mn) c/u -Capítulos Animados (1 mn) c/u
            </List.Item>
            <List.Item>-Miniseries (3 mn) c/u -Novelas (2 mn) c/u</List.Item>
            <List.Item>-Películas en Full HD (25 mn)</List.Item>
            <List.Item>-Películas en Ultra HD 4K (125mn)</List.Item>
            <List.Item>-Películas en 3D (50 mn)</List.Item>
            <List.Item> -Documentales y Shows en Full HD (25mn) </List.Item>
            <List.Item> -Series en Full HD (2.50mn por GB) </List.Item>
            <List.Item>
              -Series Documentadas en Full HD (2.50mn por GB)
            </List.Item>
            <List.Item>-Conciertos en Full HD (25 mn) </List.Item>
            <List.Item>-Discos de música en formato Mp3 (5 mn) </List.Item>
          </List>
          <Divider section />
          En nuestra página web www.cubavisuales.com usted puede no solo ver lo
          más reciente estrenándose la misma funciona como una página de compra
          online para que su pedido sea llevado a domicilio, es decir usted
          puede filtrar mediante el avanzado buscador por año, genero, actor,
          país etc. he ir comprando y a la vez se le sumara en el carrito de
          compra donde podrá verificar su compra en dinero y tamaño y pedir sea
          enviado a su domicilio sin pagar nada extra con la condición que su
          pedido sea no mínimo de 500 Pesos mn si hace un pedido menor que lo
          antes mencionado el servicio no funcionara.
          <Divider section />
          Por último y como aclaración muy importante en nuestro negocio la
          calidad, exclusividad y lujo nos cuesta constantemente grandes sumas
          monetarias, siempre tenga presente que el precio que le ofertamos no
          son nada comparables a lo que debemos pagar para poder obtener dicho
          material, nada de lo que tenemos fue conseguido por grandes ofertas,
          intercambios, regalos ni mucho menos hacemos lo que la mayoría hacen
          actualizarse y revender lo que entra en el paquete semanal nosotros
          compramos todo el material de calidad , por lo tanto le agradeceríamos
          evitar el cuestionamiento de nuestro trabajo, precios y demás ofertas
          , si usted está interesado en comprar material de calidad está en el
          lugar adecuado si los precios no están acorde a su bolsillo puede ir a
          otro local y buscar algo más económico para usted al igual recuerdo
          que no está obligado a adquirir los materiales que oferto usted es
          libre de buscar su alternativa en otro lugar...
          <Divider section />
          Cubavisuales porque la calidad, exclusividad y lujo tienen un nombre
          con más de 10 años de experiencia...
        </Container>
      </div>
    );
  }
}
