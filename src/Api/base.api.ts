import axios from "axios"

const BASE_URL = `https://dummyjson.com/products/`


export const instance = axios.create({
    baseURL: BASE_URL
})