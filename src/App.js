import {useState, useEffect} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

import HomePage from './pages/HomePage/HomePage';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearchQuery('');
    fetchData(searchQuery);
    setLoading(false);
  }

  const fetchData = async (query = 'planet') => {
    await fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
      .then(data => {
        setData(data.collection);
        setLoading(false)
      })
      .catch(err => console.log('err', err))
  }

  return (
    <div id="app">
      <Header>
        <SearchBar 
          onSearch={handleSearchChange} 
          onSearchSubmit={handleSearchSubmit} 
          searchQuery={searchQuery}/>
      </Header>

      <div className="page-content">
        <HomePage images={data} loading={loading}/>
      </div>
      
    </div>
  );
}

export default App;
