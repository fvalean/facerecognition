import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='fma4 mt0'>
			<Tilt className="Tilt ml4 br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner pa3">
			 		<img style={{paddingTop: '10px'}} src={brain} alt='brain'/>
			 	</div>
			</Tilt>
		</div>
	);
}

export default Logo;