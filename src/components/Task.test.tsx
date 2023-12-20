import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Task } from './Task';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Task component', () => {
  it('renders tasks and handles adding new task', async () => {
    const { getByText, queryByText, getByTestId } = render(
      <BrowserRouter>
      <Provider store={store}>
        <Task />
      </Provider>
      </BrowserRouter>
    );

    expect(getByText('New Task')).toBeInTheDocument();

    expect(queryByText("Please don't leave the field empty")).toBeNull();

    fireEvent.click(getByText('New Task'));

    await waitFor(() => {
      
      expect(getByTestId('input-field')).toBeInTheDocument();
      expect(getByText('Add')).toBeInTheDocument();
    });

    fireEvent.click(getByText('Add'));

    expect(getByText("Please don't leave the field empty")).toBeInTheDocument();

    const inputField = getByTestId('input-field');
    fireEvent.change(inputField, { target: { value: 'Task' } });
    fireEvent.click(getByText('Add'));

    expect(getByText('Task')).toBeInTheDocument();
  });
});
