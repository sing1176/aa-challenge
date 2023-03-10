import '../../src/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setFavorite, setData, setSelectedImage } from '../redux/dataSlice';


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

	const dispatch = useDispatch();

	const data = useSelector((state: any) => state.data);

  const favoriteImages = useSelector((state: any) => state.data.favoriteImages);

	const selectedImage = useSelector((state: any) => state.data.selectedImage);

	
	const checkIfFav = () => {
		return favoriteImages.includes(selectedImage.id)
	};

	

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
    if (favoriteImages.includes(selectedImage.id)) {
			console.log('already in fav');
			return;
		} else {
			dispatch(setFavorite(selectedImage.id));
		}
  }

  const handleDelete = () => {
		const filteredData = data.value.filter((item: any) => item.id !== selectedImage.id)

		const filteredFav = favoriteImages.filter((item: any) => item !== 
		selectedImage.id	)
    dispatch(setData(filteredData));
		dispatch(setFavorite(filteredFav));
		dispatch(setSelectedImage(''));
  }


	return (
		<>
			{selectedImage ? (
				<div className="sidebar">
					<div className="sidebarCard">
						<img
							className="sideImg"
							id={selectedImage.id}
							src={selectedImage.url}
							alt={selectedImage.title}
						/>
						<div className="headerBar">
							<div className="headerInfo">
								<h4 className="imgTitle">{selectedImage.filename}</h4>
								<p>{convertBytesToMegabytes(selectedImage.sizeInBytes)} MB</p>
							</div>
							<button onClick={handleSave} className="saveBtn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill={checkIfFav() ? 'rgb(102, 18, 237' : 'none'}
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="heartIcon"
									id={selectedImage.id}
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
								<p>{selectedImage.uploadedBy}</p>
							</div>
							<div>
								<h6>Created</h6>
								<p>{convertToDate(selectedImage.createdAt)}</p>
							</div>
							<div>
								<h6>Last Modified</h6>
								<p>{convertToDate(selectedImage.updatedAt)}</p>
							</div>
							<div>
								<h6>Dimensions</h6>
								<section className="dimensions">
									<p>{selectedImage.dimensions.height.toString()}</p>x
									<p>{selectedImage.dimensions.width.toString()}</p>
								</section>
							</div>
							<div>
								<h6>Resolution</h6>
								<section className="dimensions">
									<p>{selectedImage.resolution.height.toString()}</p>x
									<p>{selectedImage.resolution.width.toString()}</p>
								</section>
							</div>
							<h4 className="description">Description</h4>
							<p className="desText">{selectedImage.description}</p>
							<button onClick={handleDelete} className="dltBtn">
								Delete
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="sidebar">
					<div className="sidebarCard">
						<h4 className="noImg">No Image Selected</h4>
					</div>
				</div>

			)}
		</>
	);
};

export default Sidebar;
