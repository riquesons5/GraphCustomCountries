import * as C from "./styles";
import { CountryTS } from "../../types/Country";
import { Link } from "react-router-dom";

export const CountryItem = ({id, name, population, populationDensity, capital, area, urlFlagImage}: CountryTS) => {
    return (
        <C.CountryItem>
            <Link to={`country/${id}`}>
                <div className='img--area'>
                    <img src={urlFlagImage} alt={`Bandeira do País: ${name}`} />
                </div>
                <div className='data--area'>
                    <p className='country--name'>{name}</p>
                    <p>Capital: <span>{capital}</span></p>
                    <p>População: <span>{population}</span></p>
                </div>    
            </Link>
        </C.CountryItem>
    );
}