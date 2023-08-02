import axios from 'axios'

const BASE_URL = `${process.env.VUE_APP_BASE_URL}/api/v1/todo/items`


async function addItem (item) {
  const result = await axios.post(BASE_URL, item)
  return result.data
}

async function deleteItem (title) {
  let URL = `${BASE_URL}/${title}`
  const result = await axios.delete(URL)
  return result
}

async function getItemsList (params) {
  const result = await axios.get(BASE_URL)
  return result.data
}

async function updateItem (title) {
  let URL = `${BASE_URL}/${title}`
  const result = await axios.put(URL)
  return result
}

export {
  addItem,
  deleteItem,
  getItemsList,
  updateItem
}
