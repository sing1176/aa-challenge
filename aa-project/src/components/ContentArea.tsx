import React from 'react';
import '../../src/App.css';
import Photo from './Photo';
import { useSelector, useDispatch } from 'react-redux';

const ContentArea = () => {


const data = useSelector((state: any) => state.data);


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

      <div className="PhotoGrid">
        {data.value.map((photo: any) => (
          <Photo key={photo.id} photo={photo} />
        ))}
        </div>
		</div>
	);
};

export default ContentArea;
