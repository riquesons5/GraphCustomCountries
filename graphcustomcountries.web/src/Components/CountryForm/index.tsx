import React from "react";
import { CountryTS } from "../../types/Country";
import * as C from "./styles";

export const CountryForm = ({
    id, name, capital, population, populationDensity, area, urlFlagImage
}: CountryTS) => {

    const [_name, setName] = React.useState(name);
    const [_capital, setCapital] = React.useState(capital);
    const [_population, setPopulation] = React.useState(population);
    const [_populationdensity, setPopulationDensity] = React.useState(populationDensity);
    const [_area, setArea] = React.useState(area);
    const [_urlflagimage, setUrlFlagImage] = React.useState(urlFlagImage);

    function handleSubmit(event:any) {
        event.preventDefault();
        console.log("valor do nome: " + _name);
        console.log("valor da capital: " + _capital);
        console.log("valor da populacao: " + _population);
        console.log("valor da densidade demografica: " + _populationdensity);
        console.log("valor da area: " + _area);
        console.log("valor da bandeira: " + _urlflagimage);
    }

    return (
        <C.FormData>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="input--bloc">
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="name" id="name" value={_name} onChange={(e) => setName(e.target.value)} disabled />
                    </div>

                    <div className="input--bloc">
                        <label htmlFor="">Capital:</label>
                        <input type="text" name="capital" id="capital" value={_capital} onChange={(e) => setCapital(e.target.value)}/>
                    </div>

                    <div className="input--bloc">
                        <label htmlFor="">Área:</label>
                        <input type="text" name="area" id="area" value={_area} onChange={(e) => setArea(parseFloat(e.target.value))} />
                    </div>

                    <div className="input--bloc">
                        <label htmlFor="">População:</label>
                        <input type="text" name="population" id="population" value={_population} onChange={(e) => setPopulation(parseInt(e.target.value))} />
                    </div>

                    <div className="input--bloc">
                        <label htmlFor="">Densidade demografica:</label>
                        <input type="text" name="populationDensity" id="populationDensity" value={_populationdensity} onChange={(e) => setPopulationDensity(parseFloat(e.target.value))} />
                    </div>

                    <div className="input--bloc">
                        <label htmlFor="">URL bandeira:</label>
                        <input type="text" name="urlFlagImage" id="urlFlagImage" value={_urlflagimage} onChange={(e) => setUrlFlagImage(e.target.value)} />
                    </div>

                    <button>Alterar dados</button>
                </form>
            </div >
        </C.FormData >
    );
};