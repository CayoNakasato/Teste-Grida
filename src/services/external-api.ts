import axios from "axios"

export const apiConverter  = axios.create({
    baseURL: 'https://html2liquid.graduatesapi.com'
})
