import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Searchbar from '../Searchbar';

const Layout = () => {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{router.pathname === '/' ? (
				<div className=" bg-main-background relative w-full h-[653px] lg:h-[600px] object-cover">
					<Header />
					<div className="sm:hidden flex justify-center pt-5">
						<Searchbar />
					</div>
					<div className="flex flex-col items-center justify-center h-full space-y-2 ">
						<p className="text-lg font-bold">Not sure where to go?</p>
						<button className="shadow-lg hover:shadow-xl active:scale-90 h-16 w-52 rounded-full bg-white ">
							<p
								className="bg-clip-text text-transparent font-bold text-lg 
											bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
							>
								I&apos;m flexible
							</p>
						</button>
					</div>
				</div>
			) : (
				<> </>
			)}

			{/* FOOTER */}
		</div>
	);
};

export default Layout;
