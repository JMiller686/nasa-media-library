import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div id="app">
      <Header />
      
      <div className="page-content">
        <HomePage />
      </div>
      
    </div>
  );
}

export default App;
