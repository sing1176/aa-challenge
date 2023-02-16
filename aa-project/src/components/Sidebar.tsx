import '../../src/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setFavorite, setData } from '../redux/dataSlice';


interface IItem {
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


const Sidebar = () => {

	const [item, setItem] = useState<IItem | null>(null);

  const [isFav, setIsFav] = useState(false)

	const dispatch = useDispatch();

	const data = useSelector((state: any) => state.data);

  const favoriteImages = useSelector((state: any) => state.data.favoriteImages);

	const selectedId = useSelector((state: any) => state.data.selectedImageId);

	const selectedImage = data.value.find(
		(item: any) => item.id === selectedId
	);


	useEffect(() => {
		setItem(selectedImage);
    if(favoriteImages.includes(selectedImage.id)) {
      setIsFav(true)
    } else {
      setIsFav(false)
    }

	}, [selectedId]);

	const convertBytesToMegabytes = (bytes: number) => {
		let megabytes = bytes / (1024 * 1024);
		return megabytes.toFixed(1);
	};

	const convertToDate = (dateString: string) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const monthName = date.toLocaleString('default', { month: 'long' });
		const year = date.getFullYear();

		const formattedDate = `${day} ${monthName}, ${year}`;

		return formattedDate;
	};


  const handleSave = () => {
    if (favoriteImages.includes(selectedId)) {
			console.log('already in fav');
			return;
		} else {
			dispatch(setFavorite(selectedId ));
			setIsFav(true);
			console.log(favoriteImages);
		}
  }

  const handleDelete = () => {
		const filteredData = data.value.filter((item: any) => item.id !== selectedId)

		const filteredFav = favoriteImages.filter((item: any) => item !== selectedId)

    dispatch(setData(filteredData));
		dispatch(setFavorite(filteredFav));
		setItem(null)
  }



	return (
		<>
			{item && (
				<div className="sidebar">
					<div className="sidebarCard">
						<img
							className="sideImg"
							id={item.id}
							src={item.url}
							alt={item.title}
						/>
						<div className="headerBar">
							<div className="headerInfo">
								<h4 className="imgTitle">{item.filename}</h4>
								<p>{convertBytesToMegabytes(item.sizeInBytes)} MB</p>
							</div>
							<button onClick={handleSave} className="saveBtn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill={isFav ? 'rgb(102, 18, 237' : 'none'}
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="heartIcon"
									id={item.id}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
									/>
								</svg>
							</button>
						</div>

						<div className="imageInfo">
							<h4>Information</h4>
							<div>
								<h6>Uploaded by</h6>
								<p>{item.uploadedBy}</p>
							</div>
							<div>
								<h6>Created</h6>
								<p>{convertToDate(item.createdAt)}</p>
							</div>
							<div>
								<h6>Last Modified</h6>
								<p>{convertToDate(item.updatedAt)}</p>
							</div>
							<div>
								<h6>Dimensions</h6>
								<section className="dimensions">
									<p>{item.dimensions.height.toString()}</p>x
									<p>{item.dimensions.width.toString()}</p>
								</section>
							</div>
							<div>
								<h6>Resolution</h6>
								<section className="dimensions">
									<p>{item.resolution.height.toString()}</p>x
									<p>{item.resolution.width.toString()}</p>
								</section>
							</div>
							<h4 className="description">Description</h4>
							<p className="desText">{item.description}</p>
              <button onClick={handleDelete} className='dltBtn'>Delete</button>
						</div>
					</div>
				</div>
			)}

			{!item && (
				<div className='sidebar'>
					<div className='noSidebar'>
					<h3>Nothing to show</h3>
					<p>Select an image to view details</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Sidebar;
