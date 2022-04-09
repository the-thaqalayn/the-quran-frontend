import HeaderActionTypes from "./header.types";
import {applyToggleDrawer} from './header.utils';

const INITIAL_STATE ={
    drawer:{
        top: false,
        left: false,
        bottom: false,
        right: false,
    }
};

const headerReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case HeaderActionTypes.TOGGLE_DRAWER:            
            return {
                ...state,
                drawer: applyToggleDrawer(state.drawer,action.payload)
            };
    
        default:
            return state;
    }
};
export default headerReducer;