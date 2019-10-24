// @flow
import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
const ListActors = props => {
  console.log(props);
  return (
    <List bulleted horizontal link>
      {/* <List.Item as="a">0-9</List.Item> */}
      <List.Item as="a" onClick={() => props.onChangeLetter('A')}>
        A
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('B')}>
        B
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('C')}>
        C
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('D')}>
        D
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('E')}>
        E
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('F')}>
        F
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('G')}>
        G
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('H')}>
        H
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('I')}>
        I
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('J')}>
        J
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('K')}>
        K
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('L')}>
        L
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('M')}>
        M
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('N')}>
        N
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('Ñ')}>
        Ñ
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('O')}>
        O
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('P')}>
        P
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('Q')}>
        Q
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('R')}>
        R
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('S')}>
        S
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('T')}>
        T
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('U')}>
        U
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('V')}>
        V
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('W')}>
        W
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('X')}>
        X
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('Y')}>
        Y
      </List.Item>
      <List.Item as="a" onClick={() => props.onChangeLetter('Z')}>
        Z
      </List.Item>
    </List>
  );
};
export default ListActors;
