// @flow
import getDataJsonPortadaMateriales from '../utils/getDataPortadamateriales';
export const getMaterialesPortada = data => {
  return {
    type: 'feching_portada_materials'
  };
};
export const getMaterialesPortadaSuccsess = data => {
  //console.log(data)
  return {
    type: 'feching_portada_materials_succsess',
    data
  };
};
export const getMaterialesPortadaError = data => {
  return {
    type: 'feching_portada_materials_error'
  };
};
export const getMaterialesPortadaJson = () => {
  return dispatch => {
    dispatch(getMaterialesPortada());
    console.log("Llego")
    getDataJsonPortadaMateriales().then(json => {
      dispatch(getMaterialesPortadaSuccsess(json));
    });
  };
};
