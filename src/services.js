import request from 'superagent'

const URL = `https://foamy-be.herokuapp.com/api/v1/images?perPage=5&pageNumber=`

export async function getAll(pageNumber) {
  const response = await request.get(`${URL}${pageNumber}`)
  return response.body
}
