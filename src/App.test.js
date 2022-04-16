import { render, screen } from '@testing-library/react';
import { getById } from './services';
import App from './App';

test('renders a dummy hello', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('getById', async () => {
  const expected = {"id":10,"url":"https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.34.11-004a0iqm3d7dcbrkwub4znkris7l7vlgpj10jekfie078zepfqmtil8s57ahid41.png","last_modified":"2022-02-23T21:31:27.000Z","foamy":null}

  const actually = await getById(10)
  console.log(actually)
  expect(actually).toEqual(expected)
});
