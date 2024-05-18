import Container from './components/container';
import Header from './components/header';
import Hero from './components/section/hero';
import './styles.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<div>
					<Container>usps</Container>
				</div>
				<div>
					<Container>3 col layout</Container>
				</div>
				<div>
					<Container>Carousel with posters</Container>
				</div>
			</main>
		</>
	);
}

export default App;
