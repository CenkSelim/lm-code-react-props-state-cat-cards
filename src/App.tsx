import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import Dog from './data/dog';
import { useState } from 'react'
import CatCard from './components/cat_card';
import catData from './data/cat-data';
import dogData from './data/dog-data';

function App() {
	// JavaScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs, setDogs ] = useState<Array<Cat>>(dogData);
	console.log("Our pretties 😻: ", cats)
	const catCount = cats.length;
	const dogCount = dogs.length;
	//console.log(catCount);
	return (
		<>
			<Navbar />
			<Header 
			 catCount={catCount}
			 dogCount={dogCount}
			 />

			<main>
				<div className='cards__wrapper'> {cats.map((cat, index) => (
						<CatCard
							key={index}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}
						/>
					))}
				</div>

				<div className='cards__wrapper'> {dogs.map((dog, index) => (
						<CatCard
							key={index}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
							catIndex={catCount + 1}
						/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
