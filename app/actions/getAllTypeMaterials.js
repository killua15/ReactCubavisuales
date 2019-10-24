// @flow
import getDataJsonAllType from '../utils/getDataJsonAllType';
export const getAlltypeMaterials = data => {
  return {
    type: 'feching_type_materials'
  };
};
export const getAlltypeMaterialsSuccsess = data => {
  //console.log(data)
  return {
    type: 'feching_type_materials_succsess',
    data
  };
};
export const getAlltypeMaterialsError = data => {
  return {
    type: 'feching_type_materials_error'
  };
};
export const getAlltypeMaterialsJson = () => {
  return dispatch => {
    dispatch(getAlltypeMaterials());
    getDataJsonAllType().then(json => {
      dispatch(getAlltypeMaterialsSuccsess(json));
    });
  };
};
