import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionItem from './MissionItem';

test('renders learn react link', () => {
  render(<Provider store={store}><MissionItem /></Provider>);
  const linkElement = screen.getByText(/JOIN NOW/i);
  expect(linkElement).toBeInTheDocument();
});
