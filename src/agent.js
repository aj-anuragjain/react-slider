
import Unsplash from 'unsplash-js';


const ACCESS_KEY = "9d7ef7efc4102d707ccd89b08cdd565e2cdea48ef8000acaa736ba0d09d943c1";
const SECRET_KEY = "b08dc4695aa567cf834cb8aae66d89dd657c0bf10189aec8c597cba7b55e7720";


const unsplash = new Unsplash({
    applicationId: ACCESS_KEY,
    secret: SECRET_KEY,
});


export default unsplash;
