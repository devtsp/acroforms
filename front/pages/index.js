import Head from 'next/head';

import Renderer from '../components/renderer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Acroforms Fill And Sign</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Renderer documentPath="Health_Information_for_Care_Coordination_Purposes.pdf" />
		</div>
	);
}
