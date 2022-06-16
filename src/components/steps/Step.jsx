import React from 'react';
import '../../styles/steps.scss';

const Step = ({ data }) => {
	return (
		<div className='step'>
			<div className='header' data-aos="flip-left">
			</div>
			<div className='data' data-aos="flip-right">
				<div className='number'>
					{data.number}
				</div>
				<div className='description'>
					{data.description}
				</div>
			</div>
			<div className='title' data-aos="flip-left">
				{data.title}
			</div>
		</div>
	)
}

export default Step;