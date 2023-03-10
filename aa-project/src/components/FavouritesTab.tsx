import { useSelector, useDispatch } from 'react-redux';
import { setSelectedImage } from '../redux/dataSlice';

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
		const selectedImage = data.value.find((item: any) => item.id === e.target.id);
		dispatch(setSelectedImage(selectedImage));
	};

	return (
		<div className="photoGrid">
      {favoriteImages.length === 0 && <h3>No favorites yet <span>😢</span></h3>}
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
