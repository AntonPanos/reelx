import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/navigation';
import Routes from './routes';

import './App.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <Navigation />
  </BrowserRouter>
);

export default App;
