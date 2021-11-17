import React from 'react';
import SmallCard from './SmallCard';

const SmallCards = ({exploreData}) => {

	
	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16">
			{exploreData?.map((card) => (
				<SmallCard key={card.img} {...card} />
			))}
		</div>
	);
};

export default SmallCards;
