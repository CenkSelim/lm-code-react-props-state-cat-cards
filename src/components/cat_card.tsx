interface CatCardProps{
   name: string;
   species: string;
   favFoods: Array<string>;
   birthYear: number;
}
const CatCard : React.FC<CatCardProps> = (props) => {
	console.log(
		'CatCard receiving props from App?! Come in App?! 😸 Props received are: ',
		props
	);

	return (
		<div className='card'>
			<h3 className='card__text card__header'>Mr Gwumpy</h3>
			<p className='card__text'>Species: Cat</p>
			<p className='card__text'>Favourite Food(s): Caviar</p>
			<p className='card__text'>Birth Year: 1984</p>
		</div>
	);
};
export default CatCard;