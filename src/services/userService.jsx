import axios from 'axios'
const baseUrl = 'https://notes-app-7fit.onrender.com/api/users'

const userRegister = async (userData) => {
  const { data } = await axios.post(baseUrl, userData)
  return data
}

const getUser = async (userId) => {
  const { data } = await axios.get(`${baseUrl}/${userId}`)
  return data
}

export default { userRegister, getUser }
