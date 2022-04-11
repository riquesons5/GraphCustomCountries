import { CountryTS } from "../../types/Country";
import * as C from "./styles";

export const Country = ({
    id, name, capital, population, populationDensity, area, urlFlagImage
}: CountryTS) => {
    return (
        <C.CountryData>
            <img src={urlFlagImage} alt={`Bandeira do País: ${name}`} />
            <div className='data--area'>
                <h1>{name}</h1>
                <div className='data--firstArea'>
                    <p><span>Capital: </span>{capital}</p>
                    <p><span>População: </span>{population}</p>
                    <p><span>Densidade demografica: </span>{populationDensity}</p>
                    <p><span>Área: </span>{area}</p>
                </div>
            </div>
        </C.CountryData>
    );
}