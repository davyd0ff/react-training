import { 
    IS_LOAD_DATA, FAIL_LOAD_DATA, SUCCESS_LOAD_DATA
} from './actionTypes';


export const isLoadData = () => ({type: IS_LOAD_DATA});
export const successLoadData = (data) => ({type: SUCCESS_LOAD_DATA, data});
export const failLoadData = (error) => ({type: FAIL_LOAD_DATA, error});