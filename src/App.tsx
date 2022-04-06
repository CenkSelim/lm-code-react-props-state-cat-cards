import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	// JavaScript code can be inserted here!

	return (
		<>
			<Navbar />
			<Header />

			<main>
				<div className='cards__wrapper'>
					<div className="card">
						<h3 className="card__text card__header">Cindy Clawford</h3>
						<img className="card__image" src="someImageUrlHere" alt="A cute tabby kitten"></img>
						<p className="card__text">Species: Cat</p>
						<p className="card__text">Favourite Food(s): Mice</p>
						<p className="card__text">Birth Year: 2012</p>
					</div>

					<div className="card">
						<h3 className="card__text card__header">Little Miss Purrfect</h3>
						<img className="card__image" src="someImageUrlHere" alt="A gray fluffy kitten"></img>
						<p className="card__text">Species: Cat</p>
						<p className="card__text">Favourite Food(s): Wet food, dry food</p>
						<p className="card__text">Birth Year: 2016</p>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
