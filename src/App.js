import {useState, useEffect} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import QueryResultInfo from './components/QueryResultInfo/QueryResultInfo.jsx';

import HomePage from './pages/HomePage/HomePage';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [loading,setLoading] = useState(true);
  const [initialLoad,setInitialLoad] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentSearch(searchQuery);
    setSearchQuery('');
    fetchData(searchQuery);
    setInitialLoad(false);
  }

  const handlePageChange = (e) => {
    const queryParam = e.target.getAttribute('data-page');
    const toggleType = e.target.getAttribute('data-page-toggle');
        
    window.scrollTo(0,0);
    
    if(toggleType === 'next') {
      setPage(page + 1);
    } else if(toggleType === 'prev') {
      setPage(page - 1);
    }
    
    setLoading(true);
    fetchData(queryParam);
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
        {!initialLoad ? <QueryResultInfo currentSearch={currentSearch} data={data} page={page}/> : null}
        <HomePage data={data} loading={loading} initialLoad={initialLoad} handlePageChange={handlePageChange}/>
      </div>
      
    </div>
  );
}

export default App;
