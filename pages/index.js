import Cards from '../src/components/Cards';
import LargeCard from '../src/components/LargeCard';
import SmallCards from '../src/components/SmallCards';

export default function Home({ exploreData, anywhereData }) {
	return (
		<div className="max-w-7xl mx-auto px-8">
			{/* BANNER FROM LAYOUT.JS */}

			{/* EXPLORE NEARBY */}
			<section className="pt-5 flex flex-col items-center justify-center">
				<h1 className="font-semibold text-3xl pb-10">Explore Nearby</h1>
				<SmallCards exploreData={exploreData} />
			</section>

			{/* LIVE ANYWHERE */}

			<section
				className="py-10 mb-2 flex flex-col md:items-center justify-center overflow-y-scroll 
							scrollbar-hide sm:scrollbar-default 
							sm:scrollbar-thin sm:scrollbar-track-gray-300  sm:scrollbar-thumb-gray-500 select-none"
			>
				<h1 className="font-semibold text-3xl pb-10 flex justify-center">
					Live Anywhere
				</h1>
				<Cards anywhereData={anywhereData} />
			</section>

			{/* LARGE CARD */}
			<section className="">
				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Whishlists curated by Airbnb."
					buttonText="Get Inspired"
				/>
			</section>
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
