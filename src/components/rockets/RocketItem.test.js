import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketItem from './RocketItem';

test('renders learn react link', () => {
  render(<Provider store={store}><RocketItem /></Provider>);
  const linkElement = screen.getByText(/Reserve Rocket/i);
  expect(linkElement).toBeInTheDocument();
});
