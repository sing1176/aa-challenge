import React from 'react';
import '../../src/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected, setFavrouite } from '../redux/dataSlice';
import { useState, useEffect } from 'react';

const ContentArea = () => {
	const [imgArray, setImgArray] = useState([]);

	const data = useSelector((state: any) => state.data);

  const favoriteImages = useSelector((state: any) => state.data.favoriteImages);

  const selectedId = useSelector((state: any) => state.data.selectedImageId);

	const dispatch = useDispatch();
  

	useEffect(() => {
		setImgArray(data.value);
	}, [data.value]);

	const convertBytesToMegabytes = (bytes: number) => {
		let megabytes = bytes / (1024 * 1024);
		return megabytes.toFixed(1);
	};

	const handleClick = (e: any) => {
		dispatch(setSelected(e.target.id));
	};


const handleTabClick = (e: any) => {
  if (e.target.innerText === 'favourites') {
    
    imgArray.filter((item: any) => item.id === favoriteImages);

    setImgArray(favoriteImages);
  } else {
    setImgArray(data.value);
  }
};



	return (
		<>
			<div className="ContentArea">
				<h2>Photos</h2>

				<nav className="NavBar">
					<ul>
						<li>
							<a onClick={handleTabClick} href="#">
								Recently added
							</a>
						</li>
						<li>
							<a onClick={handleTabClick} href="#">
								favourites
							</a>
						</li>
					</ul>
				</nav>

				<div className="photoGrid">
					{imgArray.map((item: any) => (
						<div className="imageCard" key={item.id}>
							<img
								onClick={handleClick}
								id={item.id}
								src={item.url}
								alt={item.title}
                className={selectedId === item.id ? 'selected' : ''}
							/>
							<h4 className="imgTitle">{item.filename}</h4>
							<p>{convertBytesToMegabytes(item.sizeInBytes)} MB</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ContentArea;
