import JsonCubavisuales from '../json/cubavisuales.json';

export default async () => {
  var materialesPortada = [];

  var materialesClasicos = [];

  let tMateriales = JsonCubavisuales.find(el => {
    if (el['name'] === '_m_materiales') {
      return el;
    }
  });

  tMateriales.data.map(element => {
    if (element['portada'] === '1') {
      materialesPortada.push(element);
    }
  });
  let tClasicos = JsonCubavisuales.find(el => {
    if (el['name'] === '_m_slides') {
      return el;
    }
  });

  tMateriales.data.forEach(element => {
    //console.log(element)
    tClasicos.data.forEach(el => {
      if (el.id_material === element.id_material) {
        materialesClasicos.push(element);
      }
    });
  });

  var portada = [];
  portada.push(sortJSON(materialesPortada, 'titulo', 'asc'));
  portada.push(sortJSON(materialesClasicos, 'titulo', 'asc'));

  return portada;
};

function sortJSON(data, key, orden) {
  return data.sort(function(a, b) {
    var x = a[key],
      y = b[key];

    if (orden === 'asc') {
      return x < y ? -1 : x > y ? 1 : 0;
    }

    if (orden === 'desc') {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}
