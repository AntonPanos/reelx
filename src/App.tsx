import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import './App.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
