import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../redux/configureStore';
import MissionList from '../../pages/Missions';

describe('Mission component', () => {
  describe('Use Jest snapshots to test the Missions component', () => {
    it('renders Missions component as expected', async () => {
      const MissionsComponent = render(
        <Provider store={store}>
          <MissionList />
        </Provider>,
      );
      expect(await screen.findAllByText('Description')).toBeTruthy();
      expect(MissionsComponent.asFragment()).toMatchSnapshot();
    });
  });
});
