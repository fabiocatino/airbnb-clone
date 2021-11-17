import Header from '../src/components/Layout/Header';
import Searchbar from '../src/components/Searchbar';

export default function Home() {
	return (
		<div className="">
			<div className=" bg-main-background relative w-full h-[653px] lg:h-[600px] object-cover">
				<Header />
				<div className="sm:hidden flex justify-center pt-5">
					<Searchbar />
				</div>
				<div className="flex flex-col items-center justify-center h-full space-y-2 ">
					<p className="text-lg font-bold">Not sure where to go?</p>
					<button className="hover:shadow-lg h-16 w-52 rounded-full bg-white ">
						<p className="bg-clip-text text-transparent font-bold text-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
							I'm flexible
						</p>
					</button>
				</div>
			</div>
		</div>
	);
}
