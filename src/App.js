import {useState, useEffect} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';


function App() {
  const [searchParam, setSearchParam] = useState('');
  const [loading,setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getQuery = (e) => {
    setSearchParam(e.target.value);
  }

  async function getData() {
    const data = await fetch('https://images-api.nasa.gov/search?q=planet')
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      })
      .then(data => {
        console.log(data);
        setData(data.collection)
      })
      .catch(err => console.log('err', err))
      .finally(() => {
        setLoading(false);
      });

      return data;
  }
  console.log(data, searchParam);
  return (
    <div id="app">
      <Header onSearch={getQuery} searchParam={searchParam}/>

      <div className="page-content">
        <HomePage images={data} loading={loading}/>
      </div>
      
    </div>
  );
}

export default App;
