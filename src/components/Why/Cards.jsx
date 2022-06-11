import React from 'react';
import '../../styles/why.scss';

const Cards = ({ data }) => {
	return (
		<div className='cards'>
			<div className='hov'>
				<img src={data.icon} alt="services-icon" width="80" height="80" />
				<div className='name'>
					{data.name}
				</div>
			</div>
			<div className='description'>
				{data.description}
			</div>
		</div>
	)
}

export default Cards;