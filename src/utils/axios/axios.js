
import axios from "axios";

const BASE_URL= "https://newsapi.org/v2";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
 



const fetchDataFromAPi = async(url, params)=>{
    try {
    const {data} = await axios.get(BASE_URL + url + `&apikey=${NEWS_API_KEY}`)
        return {data};
    } catch (error) {
        console.log("Some Error Caught During Axios Call: " + error)
    }
}

export { fetchDataFromAPi };