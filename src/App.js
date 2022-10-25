import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router = {routes}></RouterProvider>
      <h1>Teh Learners</h1>
    </div>
  );
}

export default App;
