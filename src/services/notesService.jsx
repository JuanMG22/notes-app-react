import axios from 'axios'
const baseUrl = 'https://notes-app-7fit.onrender.com/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createNote = (newNote, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.post(baseUrl, newNote, config)
  return request.then(response => response.data)
}

const removeNote = (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.delete(`${baseUrl}/${id}`, config)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, createNote, update, removeNote }
