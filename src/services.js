import request from 'superagent'

const URL = `https://foamy-be.herokuapp.com/api/v1/images`
const paginated = `?perPage=6&pageNumber=`

export async function getAll(pageNumber) {
  const response = await request.get(`${URL}${paginated}${pageNumber}`)
  return response.body
}

export async function getById(id) {
  const response = await request.get(`${URL}/${id}`)
  return response.body
}
