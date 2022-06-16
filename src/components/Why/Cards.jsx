import React from 'react';
import '../../styles/why.scss';

const Cards = ({ data }) => {
	return (
		<div className='cards' data-aos="zoom-out-up">
			<div className='hov' data-aos="flip-up">
				<img src={data.icon} alt="services-icon" width="80" height="80" />
				<div className='name'>
					{data.name}
				</div>
			</div>
			<div className='description' data-aos="flip-up">
				{data.description}
			</div>
		</div>
	)
}

export default Cards;