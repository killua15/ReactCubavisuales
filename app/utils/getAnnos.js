import JsonAnnos from '../json/jsonAnno.json';
export default () => {
  // console.log(JsonCubavisuales)
  var mTypes = [];
  JsonAnnos.map(el => {
    return mTypes.push(el);
  });
  return mTypes;
};
