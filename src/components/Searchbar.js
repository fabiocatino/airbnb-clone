import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const Searchbar = () => {
	return (
		<div className="flex justify-center">
			<div className="relative">
				<SearchIcon className="absolute top-4 left-12 h-4 w-4 text-red-500" />
				<input
					className="h-[46px] w-72 rounded-full text-center focus:outline-none focus:ring-1 focus:ring-red-500"
					type="text"
					placeholder="Where are you going?"
				/>
			</div>
		</div>
	);
};

export default Searchbar;
