import '../../src/App.css';
import RecentlyAddedTab from '../components/RecentlyAddedTab';
import TabNavigation from '../components/TabNavigation';
const ContentArea = () => {

	return (
		<>
			<div className="ContentArea">
				<h2>Photos</h2>
				<TabNavigation />
				<RecentlyAddedTab />
			</div>
		</>
	);
};

export default ContentArea;
