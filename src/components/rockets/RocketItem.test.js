import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketItem from './RocketItem';

const rocket = {
  id: 32847893,
  rocket_name: 'Rocket 99',
  description: 'This is a description',
  flickr_images: ['imageURL', 'imageURL2', 'imageURL3'],
  reserved: false,
};

describe('Test rendering', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <RocketItem
          key={rocket.id}
          id={rocket.id}
          rocketName={rocket.rocket_name}
          description={rocket.description}
          flickrImages={rocket.flickr_images}
          reserved={rocket.reserved}
        />
      </Provider>,
    );
    const linkElement = screen.getByText(/Reserve Rocket/i);
    expect(linkElement).toBeInTheDocument();
  });
});
