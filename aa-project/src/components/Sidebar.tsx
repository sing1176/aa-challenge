import '../../src/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';



const Sidebar = () => {

  const [item, setItem] = useState({
    id: '',
    title: '',
    url: '',
    filename: '',
    description: '',
    sizeInBytes: 0,
    uploadedBy: '',
    createdAt: '',
    favorited: true,
    fileName: '',
    resolution: {
      width: Number,
      height: Number,
    },
    dimensions: {
      width: Number,
      height: Number,
    },

    sharedWith: [],
    updatedAt: '',
  
  });

  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    setItem(data.value[0]); 
    console.log(data.value[0]);
       
  }, []);




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

}





  return (
		<div className="sidebar">
			<div className="sidebarCard">
				<img className="sideImg" id={item.id} src={item.url} alt={item.title} />
				<div className="headerBar">
					<div className="headerInfo">
						<h4 className="imgTitle">{item.filename}</h4>
						<p>{convertBytesToMegabytes(item.sizeInBytes)} MB</p>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="heartIcon"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>
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
						<p className="dimensions">
							<p>{item.dimensions.height.toString()}</p>x
							<p>{item.dimensions.width.toString()}</p>
						</p>
					</div>
					<div>
						<h6>Resolution</h6>
						<p className="dimensions">
							<p>{item.resolution.height.toString()}</p>x
							<p>{item.resolution.width.toString()}</p>
						</p>
					</div>
					<h4 className='description'>Description</h4>
          <p className='desText'>{item.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar
