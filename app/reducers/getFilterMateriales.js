const INITIAL_STATE = {
    data: [],
    isFeching:true,
    error: false,
}
export default function getMaterialesPortadaReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        
        case 'feching_filter_materials':
           return{
               ...state,
               data:[],
               isFeching:true
           }
        case 'feching_filter_materials_succsess' :
          return{
            ...state,
            data:action.data,
            isFeching:false
          }
          
        default :
          return state
    }
}