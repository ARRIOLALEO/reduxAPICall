import { useEffect } from 'react';
import {callApi} from './store/feature/recipies'
import {useDispatch,useSelector} from 'react-redux'
import './App.css';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state)=> state)
  useEffect(()=>{
    dispatch(callApi())
  },[])
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
