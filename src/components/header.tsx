const Header: React.FC<{catCount: number, dogCount: number}> = ({catCount, dogCount}) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {catCount} Cats in this Cat App
		</h2>
		<h2 className='header__title'>
			And there are currently {dogCount} Dogs in this Cat App
		</h2>
	</header>
);

export default Header;
