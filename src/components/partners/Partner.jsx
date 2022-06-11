import React from 'react';
import twitter from '../../assets/icons/twitter.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import '../../styles/partners.scss';

const Partner = ({ data }) => {
	return (
		<div className='partner'>
			<div className='main-icon'>
				<img src={data.icon} alt='social' width='80' height='80' />
			</div>
			<div className='name'>{data.name}</div>
			<div className='discreption'>{data.description}</div>
			<div className='icons-container'>
				<img src={twitter} alt='social' width='20' height='20' />
				<img src={facebook} alt='social' width='20' height='20' />
				<img src={instagram} alt='social' width='20' height='20' />
			</div>
			<div className='button-container'>

				<button>
					Read More
				</button>
			</div>
		</div>
	)
}

export default Partner;