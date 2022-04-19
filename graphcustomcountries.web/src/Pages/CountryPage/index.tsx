import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api";
import { Country } from "../../Components/Country";
import { CountryTS } from "../../types/Country";
import * as C from "./styles";

export const CountryPage = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState<CountryTS[]>([]);

    useEffect(() => {
        if(id) {
            getCountry(Number(id))
        }
    }, [id]);

    const getCountry = async (param: number) => {
        setLoading(true);
        let country = await api.getCountry(param);
        setCountry(Array(country));
        setLoading(false);
    }

    return (
        <C.CountryPage>
            <div className='container'>
                <Link to="/" className='back--button'>Voltar</Link>
                {loading &&
                    <div className='loading'>Carregando...</div>
                }
                {!loading &&
                    country.map((item) => (
                        <Country
                            id={item.id}
                            urlFlagImage={item.urlFlagImage}
                            name={item.name}
                            population={item.population}
                            populationDensity={item.populationDensity}
                            area={item.area}
                            capital={item.capital}
                        />
                    ))
                }
            </div>
        </C.CountryPage>
    )
}