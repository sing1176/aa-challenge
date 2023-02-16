import { useSelector, useDispatch } from 'react-redux';
import { setTab } from '../redux/dataSlice';

const TabNavigation = () => {
	const dispatch = useDispatch();
	const selectedTab = useSelector((state: any) => state.data.selectedTab);

  console.log(selectedTab + ' is the selected tab');
  

	const toggleTab = (e: any) => {
    if (e.target.innerText === selectedTab ) {
      return;}
    else {
      dispatch(setTab(e.target.innerText));
    }
  };

	return (
		<div>
			<nav className="NavBar">
				<ul>
					<li>
						<a
							onClick={toggleTab}
							className={selectedTab === 'Recently added' ? 'selectedTab' : ''}
							href="#"
						>
							Recently added
						</a>
					</li>
					<li>
						<a
							onClick={toggleTab}
							className={selectedTab === 'favourites' ? 'selectedTab' : ''}
							href="#"
						>
							favourites
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TabNavigation;
