import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import App from '../App.js';
import Results from '../components/results/results';

const person = {

  'name': 'Luke Skywalker',
  'height': '172',
  'mass': '77',
}

const header = 'application/json';


test('should render results count', () => {
  render (<Results count={82} headers={header} results={person} />);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('Count: 82');
})


test('should render results', () => {
  render (<Results count={82} headers={header} results={person} />);
  const results = screen.getByTestId('results');
  expect(results).toHaveTextContent('Luke Skywalker');
  expect(results).toHaveTextContent('height');
})
