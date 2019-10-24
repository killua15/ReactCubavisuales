import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SearchInput.css';
const SearchInput = props => {
  return (
    <div>
      <button className={styles.button} type="submit">
        <i className="fa fa-search" />
      </button>
      <input
        className={styles.myInput}
        type="text"
        placeholder="Escriba su Pelicula"
        onClick={val => this.props.mySearch(val)}
      />
    </div>
  );
};
export default SearchInput;
