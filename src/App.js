import './App.css';
import Alltogether from './components/Alltogether';
import React, {useState} from 'react';
import {apiGet} from './config';
import HeadComp from './components/HeadComp'
import Spinner from 'react-bootstrap/Spinner'
import Single from './components/Single';
import { Button } from 'react-bootstrap';


function App() {

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({currPage : 1, max_Page : 1})
  const userDataPresent = userData.length !== 0;


  const getUserData = async currPage => {
    if (userData.length !== 0 && currPage === 1) {
      return;
    }
    setIsLoading(true);
    const users = await apiGet(currPage);
    setPage({ currPage, max_Page: users.total_pages });

    setIsLoading(false);
    setUserData([...userData, ...users.data]);
  };








  return (
    <div className="App">
     
        <HeadComp getUserData={getUserData}></HeadComp>
        {!isLoading && !userDataPresent && (
          <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
        <h1 className="center size-40 mt-2">
          Click on Get Users button to fetch data
        </h1>
        </div>
      )}

      {isLoading && (
        <div className='cent2'>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
      )}



    {!isLoading && userData && <Alltogether userData={userData} />}


    {page.currPage < page.max_Page && userDataPresent && !isLoading && (
        <div className='cent'>
          <Button
            className="load-more btn"
            type="button"
            variant="success" 
            style = {{
              margin : '50px'
            }}
            onClick={() => getUserData(page.currPage + 1)}
          >
            More
          </Button>
        </div>)}
      

    </div>
  );
}

export default App;
