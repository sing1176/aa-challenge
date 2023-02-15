import './App.css'
import { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
function App() {

  const [photos, setPhotos] = useState([])


const url = 'https://agencyanalytics-api.vercel.app/images.json'
 
 const fetchPhotos = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPhotos(data);
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
