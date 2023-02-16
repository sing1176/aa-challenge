import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setSelected, setSelectedImage } from '../redux/dataSlice';

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

  const selectedImage = useSelector((state: any) => state.data.selectedImage);

	const dispatch = useDispatch();

	useEffect(() => {
		const sortedArray = [...data.value].sort((a: any, b: any) => {
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		});
		setImgArray(sortedArray);
    dispatch(setSelectedImage(sortedArray[0]));
	}, [data.value]);


	const handleClick = (e: any) => {
		const selectedImage = imgArray.find((item: any) => item.id === e.target.id);
		dispatch(setSelectedImage(selectedImage));
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
							id={item.id}
							src={item.url}
							alt={item.title}
							onClick={handleClick}
							className={selectedImage.id === item.id ? 'selected' : ''}
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
