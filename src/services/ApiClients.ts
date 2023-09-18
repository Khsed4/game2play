import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '51c5f4e7df1d40549eb636a650198397'
    }
})

