import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './Nav';
import "@testing-library/jest-dom";

describe('Nav component', () => {
  it('renders navigation links', () => {
    const { getByText } = render(
      <Router>
        <Nav />
      </Router>
    );

    const listLink = getByText('List');
    const tasksLink = getByText('Tasks');

    expect(listLink).toBeInTheDocument();
    expect(tasksLink).toBeInTheDocument();

    expect(listLink.getAttribute('href')).toBe('/list');
    expect(tasksLink.getAttribute('href')).toBe('/tasks');
  });
});
