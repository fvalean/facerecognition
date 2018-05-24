import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boxes}) => {
	var faceBoxes = '';
	if(boxes)
	{
		faceBoxes = boxes.map((box, i) => {return (<div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>);});
	}

	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' src={imageUrl} alt='' width='500px' height='auto' /> 
				{faceBoxes}
			</div>
		</div>
	);
}

export default FaceRecognition;