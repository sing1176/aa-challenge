import React from 'react';
import '../../src/App.css';
import { useSelector
 } from 'react-redux';

import { useState, useEffect } from 'react';

const ContentArea = () => {

const [imgArray, setImgArray] = useState([]);

const data = useSelector((state: any) => state.data);


useEffect(() => {
  setImgArray(data.value)
}, [])

const convertBytesToMegabytes = (bytes: number) => {
	let megabytes = bytes / (1024 * 1024);
	return megabytes.toFixed(1);
};

const handleClick = (e: any) => {
	console.log(e.target.id);
};


	return (
		<div className="ContentArea">
			<h2>Photos</h2>

			<nav className="NavBar">
				<ul>
					<li>
						<a href="#">Recently added</a>
					</li>
					<li>
						<a href="#">favourites</a>
					</li>
				</ul>
			</nav>

			<div className="photoGrid">
				{imgArray.map((item: any) => (
					<div className="imageCard">
						<img
							onClick={handleClick}
							id={item.id}
							src={item.url}
							alt={item.title}
						/>
						<h4 className="imgTitle">{item.filename}</h4>
						<p>{convertBytesToMegabytes(item.sizeInBytes)} MB</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContentArea;
