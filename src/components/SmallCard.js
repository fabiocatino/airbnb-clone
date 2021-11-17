import React from 'react';
import Image from 'next/image';

const SmallCard = ({ img, distance, location }) => {
	return (
		<div className="flex gap-3">
			<Image
				className="rounded-md"
				height={64}
				width={64}
				src={img}
				alt="image"
			></Image>
			<div>
				<p className="font-semibold">{location}</p>
				<p className="text-gray-500">{distance}</p>
			</div>
		</div>
	);
};

export default SmallCard;
