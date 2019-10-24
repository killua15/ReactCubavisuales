// @flow
import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import getFotoActores from '../utils/getFotoActores';
import InfiniteCarousel from 'react-leaf-carousel';
const fs = require('fs');
const path = require('path');
const ListActors = props => {
  const { reparto } = props;
  var artist = [];
  console.log(reparto);
  if (reparto !== null) {
    if (reparto.split(',').length > 1) {
      reparto.split(',').map(el => {
        artist.push(el.trim());
      });
    }
  }

  console.log(artist);
  console.log(getFotoActores(artist[0]));

  return (
    // <List horizontal>
    //   {artist.map(e => {
    //     const directoryPath = path.join(__dirname, 'img');
    //     //debugger;
    //     console.log(directoryPath);
    //     var img = [];
    //     var nombreImagen = '';

    //     nombreImagen = getFotoActores(e);

    //     // alert(process.argv[5].split('=')[1]);
    //     if (fs.statSync(`${directoryPath}/${nombreImagen}`).isFile()) {
    //       let img = fs.readFileSync(`${directoryPath}/${nombreImagen}`);
    //       //  console.log(Buffer.from(img).toString('base64'));
    //       var imagen64 = Buffer.from(img).toString('base64');
    //     }
    //     return (
    //       <List.Item>
    //         <Image size="mini" src={`data:image/gif;base64,${imagen64}`} />
    //         <List.Content>
    //           <List.Header>{e}</List.Header>
    //         </List.Content>
    //       </List.Item>
    //     );
    //   })}
    // </List>
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
      // dots={true}
      showSides={true}
      // sidesOpacity={0.5}
      // sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {artist.map(e => {
        const directoryPath = path.join(__dirname, 'img');
        //debugger;
        console.log(directoryPath);
        var img = [];
        var nombreImagen = '';

        nombreImagen = getFotoActores(e);

        // alert(process.argv[5].split('=')[1]);
        debugger;
        try {
          if (
            fs.statSync(`${directoryPath}/${nombreImagen}`).isFile() == true
          ) {
            let img = fs.readFileSync(`${directoryPath}/${nombreImagen}`);
            //  console.log(Buffer.from(img).toString('base64'));
            var imagen64 = Buffer.from(img).toString('base64');
          }
        } catch (e) {}

        return (
          <List.Item>
            <Image size="tiny" src={`data:image/gif;base64,${imagen64}`} />
            <List.Content>
              <List.Header>{e}</List.Header>
            </List.Content>
          </List.Item>
        );
      })}
    </InfiniteCarousel>
  );
};
export default ListActors;
