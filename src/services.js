import request from 'superagent'

const URL = 'https://foamy-be.herokuapp.com/api/v1/images'

export async function getAll() {
  const response = await request.get(`${URL}`)
  return response.body
}
