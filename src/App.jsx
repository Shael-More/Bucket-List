import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import Layout from './components/common/Layout';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Route>,
  ),
);
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
