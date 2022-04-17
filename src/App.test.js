import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// import { getById, getAll } from './services'
import App from './App'

describe('Front End Behavioral tests', () => {
  it('renders a dummy hello', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const linkElement = screen.getByText(/hello/i)
    expect(linkElement).toBeInTheDocument()
  })


  //  HTTP request method tests are not working with the proxy server CORS hack. 'Bad Request' Error
  //  Solution would be to set up a mock server

  // it('getAll', async () => {
  //   const expected = [
  //     {
  //       id: 6,
  //       url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.29.56-j2ksuoclj7qv9i3eg6kibqp7tt37ofuz7gttf1bljmfjrr7r8so3cud2wgqjrxi9.png',
  //       last_modified: '2022-02-23T21:31:27.000Z',
  //       foamy: null,
  //     },
  //   ]

  //   const actual = await getAll(1)
  //   console.log(actual)
  //   expect(actual).toEqual(expect.arrayContaining(expected))
  // })

  // it('getById', async () => {
  //   const expected = {
  //     id: 10,
  //     url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.34.11-004a0iqm3d7dcbrkwub4znkris7l7vlgpj10jekfie078zepfqmtil8s57ahid41.png',
  //     last_modified: '2022-02-23T21:31:27.000Z',
  //     foamy: null,
  //   }

  //   const actual = await getById(10)
  //   expect(actual).toEqual(expected)
  // })
})
