import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { List } from './List';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('List component', () => {
  it('renders data after successful API call', async () => {
    const mockData = [
      {
        createdAt: '2023-12-01',
        name: 'Item 1',
        avatar: 'avatar-url-1',
        id: '1',
      },
      {
        createdAt: '2023-12-02',
        name: 'Item 2',
        avatar: 'avatar-url-2',
        id: '2',
      },
    ];

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: mockData,
    });

    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  it('handles API call error', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error('API Error'));

    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
      expect(screen.getByText('Error fetching data')).toBeInTheDocument();
    });
  });

});
