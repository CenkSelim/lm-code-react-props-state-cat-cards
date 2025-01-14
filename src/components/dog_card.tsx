interface DogCardProps{
   name: string;
   species: string;
   favFoods: Array<string>;
   birthYear: number;
}

const DogCard : React.FC<DogCardProps> = ({ name, species, favFoods, birthYear }) => {

	return (
		<div className='card'>
			<h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods.map((food,index) => index < favFoods.length - 1 ? `${food}, ` : `${food}`)}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
		</div>
	);
};
export default DogCard;