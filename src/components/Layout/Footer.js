import React from 'react';

function Copyright() {
	return (
		<p className="text-sm ">
			{'Copyright © '}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/fabiocatino"
			>
				<span className="text-blue-600 font-bold cursor-pointer">
					Fabio Catino
				</span>
			</a>{' '}
			{new Date().getFullYear()}
		</p>
	);
}

const Footer = () => {
	return (
		<div className="absolute bottom w-full">
			<div className="h-48 bg-gray-200 flex flex-col  items-center justify-center  ">
				<p className="font-semibold">Airbnb Clone - NOT THE ORIGINAL WEBSITE</p>
				<Copyright />
			</div>
		</div>
	);
};

export default Footer;
