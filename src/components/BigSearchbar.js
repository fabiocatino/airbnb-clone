import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const BigSearchbar = ({open, setOpen}) => {

	return (
		<div className="flex h-[66px] min-w-[350px] max-w-[846px] pl-7 pr-3 bg-white rounded-full">
			<div className="w-[269.98px] flex flex-1 flex-col justify-center cursor-pointer">
				<p className="text-sm font-bold">Location</p>
				<input
					className="focus:outline-none truncate"
					type="text"
					label="Location"
					placeholder="Where are you going?"
				/>
			</div>
			<div className="divider" />
			<button onClick={() => setOpen(!open)} className="searchbar-btn">
				<p className="text-sm font-bold">Check in</p>
				<p className="text-sm text-gray-400">Add dates</p>
			</button>
			<div className="divider" />
			<button className="searchbar-btn">
				<p className="text-sm font-bold">Check out</p>
				<p className="text-sm text-gray-400">Add dates</p>
			</button>
			<div className="divider" />
			<button className="w-[169.72px] searchbar-btn">
				<p className="text-sm font-bold">Guests</p>
				<p className="text-sm text-gray-400">Add guests</p>
			</button>
			<div className="w-[57px] flex items-center cursor-pointer ">
				<div className="bg-searchBtn p-4 rounded-full  text-white pt-3">
					<SearchIcon className="h-6 w-6" />
				</div>
			</div>
		</div>
	);
};

export default BigSearchbar;
