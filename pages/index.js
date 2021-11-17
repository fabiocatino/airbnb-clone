import Cards from '../src/components/Cards';
import SmallCards from '../src/components/SmallCards';

export default function Home({ exploreData, anywhereData }) {
	return (
		<div className="">
			{/* BANNER FROM LAYOUT.JS */}

			{/* EXPLORE NEARBY */}
			<div className="pt-5 flex flex-col items-center justify-center">
				<h1 className="font-semibold text-3xl pb-10">Explore Nearby</h1>
				<SmallCards exploreData={exploreData} />
			</div>

			{/* LIVE ANYWHERE */}

			<div
				className="p-10 mb-96 flex flex-col md:items-center justify-center overflow-y-scroll 
							scrollbar-hide sm:scrollbar-default 
							sm:scrollbar-thin sm:scrollbar-track-gray-300  sm:scrollbar-thumb-gray-500 select-none"
			>
				<h1 className="font-semibold text-3xl pb-10 flex justify-center">
					Live Anywhere
				</h1>
				<Cards anywhereData={anywhereData} />
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://links.papareact.com/pyp');
	const exploreData = await res.json();

	const res1 = await fetch('https://links.papareact.com/zp1');
	const anywhereData = await res1.json();

	return {
		props: { exploreData, anywhereData },
	};
}
