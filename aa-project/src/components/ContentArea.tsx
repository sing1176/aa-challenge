import React from 'react';
import '../../src/App.css';

const ContentArea = () => {
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
		</div>
	);
};

export default ContentArea;
