import { 
    LOAD_DATA, SUCCESS_LOAD_DATA, FAIL_LOAD_DATA
} from './actionTypes';


const reducer = (state, action) => {
    switch(action.type){
        case LOAD_DATA:
            return {...state, isLoading: true, message: 'Идет загрузка'};
        case SUCCESS_LOAD_DATA:
            return {...state, data: action.data, isLoading: false, message: ''};
        case FAIL_LOAD_DATA:
            return {...state, message: action.error, isLoading: false};
        default:
            return state;
    }
};


export default reducer;