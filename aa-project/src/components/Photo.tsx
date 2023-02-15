import React from 'react'


interface PhotoProps {
  photo: any
}

const convertBytesToMegabytes = (bytes: number) => {
  let megabytes = bytes / (1024 * 1024);
 return megabytes.toFixed(1);
}


const Photo = (Photo : PhotoProps) => {
	return (
		<div className='imageCard'>
			<img  src={Photo.photo.url} alt={Photo.photo.title} />
			<h4 className='imgTitle'>{Photo.photo.filename}</h4>
			<p>{convertBytesToMegabytes(Photo.photo.sizeInBytes)} MB</p>
		</div>
	);
};

export default Photo
