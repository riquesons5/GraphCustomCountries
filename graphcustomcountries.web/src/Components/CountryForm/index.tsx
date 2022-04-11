import { CountryTS } from "../../types/Country";
import * as C from "./styles";

export const CountryForm = ({
    id, name, capital, population, populationDensity, area, urlFlagImage
}: CountryTS) => {
    return (
        <C.FormData>
            <div className="container">
                <form action="">
                    <div className="input--bloc">
                        <span>Nome:</span>
                        <input type="text" value={name} disabled />
                    </div>

                    <div className="input--bloc">
                        <span>Capital:</span>
                        <input type="text" value={capital} />
                    </div>

                    <div className="input--bloc">
                        <span>Área:</span>
                        <input type="text" value={area} />
                    </div>

                    <div className="input--bloc">
                        <span>População:</span>
                        <input type="text" value={population} />
                    </div>

                    <div className="input--bloc">
                        <span>Densidade demografica:</span>
                        <input type="text" value={populationDensity} />
                    </div>

                    <div className="input--bloc">
                        <span>URL bandeira:</span>
                        <input type="text" value={urlFlagImage} />
                    </div>
                </form>
            </div >
            {/* {id}, {name}, {capital}, {population}, {populationDensity}, {area}, {urlFlagImage} */}
        </C.FormData >
    );
};