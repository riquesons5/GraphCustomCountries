import { CountryTS } from "../../types/Country";
import * as C from "./styles";

export const CountryForm = ({
    id, name, capital, population, populationDensity, area, urlFlagImage
}: CountryTS) => {
    return (
        <C.FormData>
            {id}, {name}, {capital}, {population}, {populationDensity}, {area}, {urlFlagImage}
        </C.FormData>
    );
};