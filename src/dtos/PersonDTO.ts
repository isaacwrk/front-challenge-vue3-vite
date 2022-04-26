import FilmDTO from "./FilmDTO";
import SpecieDTO from "./SpecieDTO";
import StarshipDTO from "./StarshipDTO";
import VehicleDTO from "./VehicleDTO";
import PlanetDTO from "./PlanetDTO";

export default interface Person{
    name: string,
    gender: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    url: string,
    homeworld: PlanetDTO;
    films: FilmDTO[],
    species: SpecieDTO[],
    vehicles:VehicleDTO[],
    starships: StarshipDTO[]
}