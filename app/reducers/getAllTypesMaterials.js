const INITIAL_STATE = {
    data: [],
    isFeching:true,
    error: false,
}
export default function getAllTypeMaterialsReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        
        case 'feching_type_materials':
        console.log(action.type)
           return{
               ...state,
               data:[],
               isFeching:true
           }
        case 'feching_type_materials_succsess' :
        
          return{
            ...state,
            data:action.data,
            isFeching:false
          }
        default :
          return state
    }
}