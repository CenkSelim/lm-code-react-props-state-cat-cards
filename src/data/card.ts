export default interface Card {
  id?: string;
  name: string;
  species: string;
  favFoods: Array<string>; // or string[]
  birthYear: number;
}