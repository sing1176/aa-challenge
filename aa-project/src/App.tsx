import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { setData, setSelected } from './redux/dataSlice';

function App() {

const url = 'https://agencyanalytics-api.vercel.app/images.json'

const dispatch = useDispatch();

 const fetchPhotos = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
      dispatch(setData(data));
       dispatch(setSelected(data[0].id));

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
