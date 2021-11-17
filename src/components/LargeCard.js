import React from 'react';
import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
	return (
		<div className="relative py-16">
			<div className="relative h-96 min-w-[300px]">
				<Image
					className="rounded-lg"
					layout="fill"
					objectFit="cover"
					src={img}
					alt="image"
				></Image>
				<div className="absolute top-24 left-12 font-semibold">
					<h1 className="w-64 text-4xl mb-3">{title}</h1>
					<h5 className="text-sm mb-3">{description}</h5>
                    <button className="bg-black text-white p-2 rounded-xl hover:scale-90" >{buttonText}</button>
				</div>
			</div>
		</div>
	);
};

export default LargeCard;
