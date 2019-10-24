// @flow
import getFilterMaterialesData from '../utils/getFilterMaterialesData';
export const getFilterMateriales = data => {
  return {
    type: 'feching_filter_materials'
  };
};
export const getFilterMaterialesSuccsess = data => {
  //console.log(data)
  return {
    type: 'feching_filter_materials_succsess',
    data
  };
};
export const getFilterMaterialesError = data => {
  return {
    type: 'feching_filter_materials_error'
  };
};
export const getFilterMaterialesJson = (filters) => {
  return dispatch => {
    dispatch(getFilterMateriales());
    console.log("Llego")
    getFilterMaterialesData(filters).then(json => {
      dispatch(getFilterMaterialesSuccsess(json));
    });
  };
};
