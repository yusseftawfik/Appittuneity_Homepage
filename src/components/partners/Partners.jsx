import React from 'react';
import '../../styles/partners.scss';
import eyeStudy from '../../assets/icons/eye-study.svg';
import smartHome from '../../assets/icons/smart-home.svg';
import apple from '../../assets/icons/apple.svg';

import Partner from './Partner';

const Partners = () => {
	const data = [
		{
			name: "Aye Eye Study",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
			icon: eyeStudy,
		},
		{
			name: "My smart home",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
			icon: smartHome,
		},
		{
			name: "Apple",
			description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
			icon: apple,
		},
	];
	return (
		<div className="partners">
			<div className="partners-container">
				{
					data.map(data =>
						<Partner data-aos="zoom-out" data={data} />
					)
				}
			</div>
			<div className="middle-line">
			</div>
			<div className='footer'>
				<div className='inputs'>
					<span>
						Book a Call
					</span>
					<div>
						<label htmlFor="name">Name</label>
						<input type='text' id='name' />
					</div>
					<div>
						<label htmlFor="company">Company</label>
						<input type='text' id='company' />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type='email' id='email' />
					</div>
				</div>
				<div className='book'>
					<textarea placeholder='Massage' cols='50' rows='10'>
					</textarea>
					<button>Book a Call</button>
				</div>
			</div>
		</div>)
}

export default Partners;