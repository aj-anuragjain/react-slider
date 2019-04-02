
import {GET_IMAGE_LIST_FROM_SPLASH_API, CLEAR_IMAGE_LIST_FROM_SPLASH_API} from './constants';
import _ from "lodash";


export default function getImagesReducer(state = null, action) {
    switch(action.type){
        case GET_IMAGE_LIST_FROM_SPLASH_API:
            return setImageList(state, action);
        case CLEAR_IMAGE_LIST_FROM_SPLASH_API:
            return clearImageList(state, action);
        default:
            return state;
    }
}


function setImageList(state, action){
    const payloadObject = {
        [action.payload.sliderName]: action.payload.data
    };
    return Object.assign({}, state, payloadObject);
}


function clearImageList(state, action){
    const stateCopy = _.slice(state);
    delete stateCopy[action.payload.sliderName];
    return stateCopy;
}
