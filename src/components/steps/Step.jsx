import React from 'react';
import '../../styles/steps.scss';

const Step = ({ data }) => {
	return (
		<div className='step'>
			<div className='header'>
			</div>
			<div className='data'>
				<div className='number'>
					{data.number}
				</div>
				<div className='description'>
					{data.description}
				</div>
			</div>
			<div className='title'>
				{data.title}
			</div>
		</div>
	)
}

export default Step;