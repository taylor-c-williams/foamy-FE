import request from 'superagent'

// I am using a hack called CORS Anywhere to set up a proxy server to work around some nasty CORS
// errors:
// https://github.com/Rob--W/cors-anywhere
const URL = `https://floating-retreat-88641.herokuapp.com/https://foamy-be.herokuapp.com/api/v1/images`
const paginated = `?perPage=6&pageNumber=`

export async function getAll(pageNumber) {
  const res = await request.get(`${URL}${paginated}${pageNumber}`)
  return res.body
}

export async function getById(id) {
  const res = await request.get(`${URL}/${id}`)
  return res.body
}

export async function updateStatus(id, status){
  const res = await request.patch(`${URL}/${id}`)
  .send({foamy: status})
  return res.body
}

export async function getFoamy(pageNumber){
  const res = await request.get(`${URL}/status/foamy${paginated}${pageNumber}`)
  return res.body
}

export async function getNotFoamy(pageNumber){
  const res = await request.get(`${URL}/status/not-foamy${paginated}${pageNumber}`)
  return res.body
}



