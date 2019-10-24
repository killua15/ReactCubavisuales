import JsonCubavisuales from '../json/cubavisuales.json';
const TiposMateriales = () => {
  // console.log(JsonCubavisuales)
  let mTypes = JsonCubavisuales.find(el => {
    if (el['name'] === '_c_tipos_materiales') {
      return el;
    }
  });
  return mTypes.data;
};
export default TiposMateriales;
