import JsonPaises from '../json/countries.json';
export default () => {
  // console.log(JsonCubavisuales)
  var mTypes = [];
  JsonPaises.map(el => {
    return mTypes.push(el);
  });
  return mTypes;
};
