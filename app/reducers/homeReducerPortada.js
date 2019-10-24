const INITIAL_STATE = {
    data: [],
    isFeching:true,
    error: false,
}
export default function getMaterialesPortadaReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        
        case 'feching_portada_materials':
           return{
               ...state,
               data:[],
               isFeching:true
           }
        case 'feching_portada_materials_succsess' :
          return{
            ...state,
            data:action.data,
            isFeching:false
          }
          
        default :
          return state
    }
}