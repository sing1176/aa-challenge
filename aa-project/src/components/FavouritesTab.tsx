import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setSelected } from '../redux/dataSlice';

const FavouritesTab = () => {

  const selectedId = useSelector((state: any) => state.data.selectedImageId);

  const data = useSelector((state: any) => state.data);

  const favoriteImagesIds = useSelector((state: any) => state.data.favoriteImages);

  const favoriteImages = data.value.filter((item: any) => favoriteImagesIds.includes(item.id));
  

  const dispatch = useDispatch();

	const convertBytesToMegabytes = (bytes: number) => {
		let megabytes = bytes / (1024 * 1024);
		return megabytes.toFixed(1);
	};

  const handleClick = (e: any) => {
		dispatch(setSelected(e.target.id));
	};

	return (
		<div className="photoGrid">
			{favoriteImages.map((item: any) => (
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
	);
};

export default FavouritesTab;
