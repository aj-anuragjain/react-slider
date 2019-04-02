
import unsplash from '../../agent';
import {GET_IMAGE_LIST_FROM_SPLASH_API, CLEAR_IMAGE_LIST_FROM_SPLASH_API} from './constants';


export function getImages(data, sliderName){
    return {
        type: GET_IMAGE_LIST_FROM_SPLASH_API,
        payload: {
            data, 
            sliderName,
        },
    };
}


export function getImagesFromApi(sliderName){
    return (dispatch) => {
        return unsplash
        .photos
        .listPhotos(4, 4, "latest")
        .then(response => response.json())
        .then(data => {
            dispatch(getImages(data, sliderName));
        }).catch(err => {console.log(err)});
    }
}


export function clearImages(sliderName){
    return {
        type: CLEAR_IMAGE_LIST_FROM_SPLASH_API,
        payload: {
            sliderName,
        }
    }
}
