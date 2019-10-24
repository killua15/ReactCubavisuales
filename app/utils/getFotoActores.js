import JsonCubavisuales from '../json/cubavisuales.json';
export default name => {
  // console.log(JsonCubavisuales)
  let mTypes = JsonCubavisuales.find(el => {
    if (el['name'] === '_m_actores') {
      return el;
    }
  });

  var actor = '';
  mTypes.data.find(e => {
    var nombre_actor = '' + name;
    if (nombre_actor !== '') {
      if (
        e.nombre_actor.toLowerCase().indexOf(nombre_actor.toLowerCase()) > -1
      ) {
        actor = e.imagen;
      }
    }
  });
  return actor;
};
