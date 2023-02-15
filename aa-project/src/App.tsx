import './App.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { setData } from './redux/dataSlice';

function App() {

const url = 'https://agencyanalytics-api.vercel.app/images.json'

const dispatch = useDispatch();

 const fetchPhotos = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
      dispatch(setData(data));

		} catch (error) {
			console.error(error);
		}
 };
 
  useEffect(() => {
    fetchPhotos()
  }, [])



  return (
    <div className="App">
      <ContentArea />
      <Sidebar />
    </div>
  )
}

export default App
