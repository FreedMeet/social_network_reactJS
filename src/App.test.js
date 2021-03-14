import MainApp from './App';
import * as reactDOM from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div');
  reactDOM.render(<MainApp />, div);
  reactDOM.unmountComponentAtNode(div);
});
