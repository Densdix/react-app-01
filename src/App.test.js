import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/reactStore";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  render(
      <Provider store={store}>
        <App/>
      </Provider>
  )
});
