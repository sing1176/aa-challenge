import React from 'react';
import '../../src/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected, setFavrouite } from '../redux/dataSlice';
import { useState, useEffect } from 'react';
import RecentlyAddedTab from '../components/RecentlyAddedTab';

const ContentArea = () => {
	const [selectedTab, setSelectedTab] = useState('recently added');

	useEffect(() => {
		setSelectedTab('recently added');
	}, []);

	const handleTabClick = (e: any) => {};

	return (
		<>
			<div className="ContentArea">
				<h2>Photos</h2>
				<nav className="NavBar">
					<ul>
						<li>
							<a
								onClick={handleTabClick}
								className={
									selectedTab === 'recently added' ? 'selectedTab' : ''
								}
								href="#"
							>
								Recently added
							</a>
						</li>
						<li>
							<a
								onClick={handleTabClick}
								className={selectedTab === 'favourites' ? 'selectedTab' : ''}
								href="#"
							>
								favourites
							</a>
						</li>
					</ul>
				</nav>
				<RecentlyAddedTab />
			</div>
		</>
	);
};

export default ContentArea;
