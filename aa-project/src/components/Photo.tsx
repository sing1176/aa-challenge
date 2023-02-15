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
		<div>
			<img className="img" src={Photo.photo.url} alt={Photo.photo.title} />
			<h3>{Photo.photo.filename}</h3>
			<p>{convertBytesToMegabytes(Photo.photo.sizeInBytes)} MB</p>
		</div>
	);
};

export default Photo
