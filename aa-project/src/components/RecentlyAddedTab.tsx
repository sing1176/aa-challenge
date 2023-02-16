import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setSelected } from '../redux/dataSlice';

const RecentlyAddedTab = () => {

  const [imgArray, setImgArray] = useState([]);

  const data = useSelector((state: any) => state.data);

	const dispatch = useDispatch();

  useEffect(() => {
		setImgArray(data.value);
	}, [data.value]);


  const selectedId = useSelector((state: any) => state.data.selectedImageId);


  	const handleClick = (e: any) => {
			dispatch(setSelected(e.target.id));
		};


	const convertBytesToMegabytes = (bytes: number) => {
		let megabytes = bytes / (1024 * 1024);
		return megabytes.toFixed(1);
	};

  return <>
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
  
}

export default RecentlyAddedTab
