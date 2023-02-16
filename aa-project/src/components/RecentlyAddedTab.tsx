import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setSelected } from '../redux/dataSlice';

interface DataInterface {
	id: string;
	title: string;
	url: string;
	filename: string;
	description: string;
	sizeInBytes: number;
	uploadedBy: string;
	createdAt: string;
	favorited: boolean;
	fileName: string;
	resolution: {
		width: number;
		height: number;
	};
	dimensions: {
		width: number;
		height: number;
	};

	sharedWith: [];
	updatedAt: string;
}

const RecentlyAddedTab = () => {
	const [imgArray, setImgArray] = useState<DataInterface[]>([]);

	const data = useSelector((state: any) => state.data);

	const dispatch = useDispatch();

	useEffect(() => {
		const sortedArray = [...data.value].sort((a: any, b: any) => {
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		});
		setImgArray(sortedArray);
    dispatch(setSelected(sortedArray[0].id));
    
	}, [data.value]);

	const selectedId = useSelector((state: any) => state.data.selectedImageId);

	const handleClick = (e: any) => {
		dispatch(setSelected(e.target.id));
	};

	const convertBytesToMegabytes = (bytes: number) => {
		let megabytes = bytes / (1024 * 1024);
		return megabytes.toFixed(1);
	};

	return (
		<>
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
		</>
	);
};

export default RecentlyAddedTab;
