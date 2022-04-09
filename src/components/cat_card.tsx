interface CatCardProps{
   name: string;
   species: string;
   favFoods: Array<string>;
   birthYear: number;
   catIndex: number;
}

const CatCard : React.FC<CatCardProps> = ({ name, species, favFoods, birthYear, children }) => {
	return (
		<div className='card'>
			<h3 className="card__text card__header">{name}</h3>
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods.map((food,index) => index < favFoods.length - 1 ? `${food}, ` : `${food}`)}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
			{children}			
		</div>
	)
};
export default CatCard;