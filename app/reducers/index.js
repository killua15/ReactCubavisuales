// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import getAllTypeMaterialsReducer from './getAllTypesMaterials'
import getMaterialesPortadaReducer from './homeReducerPortada'
import getMaterialesFilterReducer from './getFilterMateriales'

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    getAllTypeMaterialsReducer,
    getMaterialesPortadaReducer,
    getMaterialesFilterReducer
  });
}
