import './App.css';

import { useState } from 'react'

import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card';
import DogCard from './components/dog_card';
import ImageCard from './components/card_image';
import CatForm from './components/add_cat';

import Card from './data/card';
import Image from './data/image';
import catData from './data/cat-data';
import dogData from './data/dog-data';
import catImageData from './data/cat-image-data';


function App() {
	const [cats, setCats] = useState<Array<Card>>(catData);
	const [dogs] = useState<Array<Card>>(dogData);
	const [images] = useState<Array<Image>>(catImageData);

	const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [favFoods, setFavFoods] = useState<string[]>([]);
    const [birthYear, setBirthYear] = useState<number>(2022);

	console.log("Our pretties 😻: ", cats, dogs,images)
	const catCount = cats.length;
	const dogCount = dogs.length;
	const imageCount = images.length;
	return (
		<>
			<Navbar />
			<Header 
			 catCount={catCount}
			 dogCount={dogCount}
			 />

			<main>
				<CatForm
					name={name}
					species={species}
					favFoods={favFoods}
					birthYear={birthYear}
					cats={cats}
					setName={setName}
        			setSpecies={setSpecies}
        			setFavFoods={setFavFoods}
        			setBirthYear={setBirthYear}
					setCats={setCats}
				/>

				<div className='cards__wrapper'>{cats.map((cat, index) => (
						<CatCard
							key={index}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}>
							{index < imageCount && (<ImageCard key={index} {...images[index]}
								/>)}
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
