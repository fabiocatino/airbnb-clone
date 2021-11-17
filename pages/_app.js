import '../public/global.css';
import Layout from '../src/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
