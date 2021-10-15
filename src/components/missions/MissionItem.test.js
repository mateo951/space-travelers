import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Table } from 'react-bootstrap';
import store from '../../redux/configureStore';
import MissionItem from './MissionItem';

const mission = {
  mission_id: '32847893',
  mission_name: 'Mission 99',
  mission_description: 'This is a description',
  reserved: false,
};
describe('Test rendering', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <Table>
          <tbody>
            <MissionItem
              key={mission.mission_id}
              mission_id={mission.mission_id}
              mission_name={mission.mission_name}
              mission_description={mission.mission_description}
              mission_reserved={mission.reserved}
            />
          </tbody>
        </Table>
      </Provider>,
    );
    const linkElement = screen.getByText(/JOIN NOW/i);
    expect(linkElement).toBeInTheDocument();
  });
});
