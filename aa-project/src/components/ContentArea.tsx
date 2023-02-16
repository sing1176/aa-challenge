import '../../src/App.css';
import RecentlyAddedTab from '../components/RecentlyAddedTab';
import TabNavigation from '../components/TabNavigation';
import FavouritesTab from '../components/FavouritesTab';
import { useSelector } from 'react-redux';

const ContentArea = () => {
const selectedTab = useSelector((state: any) => state.data.selectedTab);
	return (
		<>
			<div className="ContentArea">
				<h2>Photos</h2>
				<TabNavigation />
        {selectedTab === 'Recently added' ? <RecentlyAddedTab /> : <FavouritesTab />}
			</div>
		</>
	);
};

export default ContentArea;
