import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Card from './data/card';
import { useState } from 'react'
import CatCard from './components/cat_card';
import DogCard from './components/dog_card';
import ImageCard from './components/card_image'

import catData from './data/cat-data';
import dogData from './data/dog-data';
import catImageData from './data/cat-image-data';
import Image from './data/image';

function App() {
	const [cats, setCats] = useState<Array<Card>>(catData);
	const [dogs, setDogs] = useState<Array<Card>>(dogData);
	const [images,setImages] = useState<Array<Image>>(catImageData);

	console.log("Our pretties 😻: ", cats, dogs,images)
	const catCount = cats.length;
	const dogCount = dogs.length;
	return (
		<>
			<Navbar />
			<Header 
			 catCount={catCount}
			 dogCount={dogCount}
			 />

			<main>
				<div className='cards__wrapper'>{cats.map((cat, index) => (
						<CatCard
							key={index}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}>
							<ImageCard key={index} {...images[index]}
								/>
						</CatCard>
					))}
				</div>

				<div className='cards__wrapper'> {dogs.map((dog, index) => (
						<DogCard
							key={index}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
						/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
