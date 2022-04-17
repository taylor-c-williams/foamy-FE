import request from 'superagent'

const URL = `https://pacific-thicket-98495.herokuapp.com/api/v1/images`
// const URL = `localhost:7890/api/v1/images`
const paginated = `?perPage=6&pageNumber=`

export async function getAll(pageNumber) {
  const res = await request.get(`${URL}${paginated}${pageNumber}`)
  return res.body
}

export async function getById(id) {
  const res = await request.get(`${URL}/${id}`)
  return res.body
}

export async function updateStatus(id){
  const res = await request.put(`${URL}/${id}`)
  return res.body
}

