import React from 'react';
import Image from 'next/image';

const Card = ({ img, title }) => {
	return (
		<div>
			<div className="relative h-72 w-72 cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-2">
				<Image className="rounded-md " layout="fill" src={img} alt="image" />
			</div>
			<p className="text-md font-semibold">{title}</p>
		</div>
	);
};

export default Card;
