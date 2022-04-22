import axios from 'axios'

const getAdvice = axios.create({
  baseURL: 'https://api.adviceslip.com',
})

export default getAdvice
