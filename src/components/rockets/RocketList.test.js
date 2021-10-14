import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../redux/configureStore';
import Rockets from '../../pages/RocketsPage';

describe('Rockets component', () => {
  describe('Use Jest snapshots to test the Rockets component', () => {
    it('renders Rockets component as expected', async () => {
      const RocketsComponent = render(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );

      expect(await screen.findAllByText('Reserve Rocket')).toBeTruthy();
      expect(RocketsComponent.asFragment()).toMatchSnapshot();
    });
  });
});
