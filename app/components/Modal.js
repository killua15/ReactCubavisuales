// @flow
import React, { Component } from 'react';
type Props = {};
import styles from './Modal.css';
export default class Modal extends Component<Props> {
  render() {
    const { handleClose, show, children } = this.props;
    //const showHideClassName = show ? 'modal displayBlock' : 'modal displayNone';
    //console.log(showHideClassName);
    return (
      <div>
        {show ? (
          <div className={styles.displayBlock}>
            <section className="modalMain">{children}</section>
          </div>
        ) : (
          <div className={styles.displayNone}>
            <section className="modalMain">{children}</section>
          </div>
        )}
      </div>
    );
  }
}
