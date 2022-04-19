import * as C from "./styles";
import { useEffect, useState } from 'react';
import { Input } from '../../Components/Input';
import { CountryTS } from '../../types/Country';
import { CountryItem } from '../../Components/CountryItem';
import { api } from '../../api';

export const Countries = () => {
    const [countries, setCountries] = useState<CountryTS[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllCountries()
    }, []);

    const getAllCountries = async () => {
        setLoading(true);
        let countries = await api.getCountries();
        setCountries(countries);
        console.log(countries);
        setLoading(false);
    };

    return (
        <C.CountriesArea>
            <Input />
            <div className='countries'>
                {loading &&
                    <div className=''>Carregando...</div>
                }
                {!loading &&
                    countries.map((item) => (
                        <CountryItem
                            id={item.id}
                            name={item.name}
                            population={item.population}
                            populationDensity={item.populationDensity}
                            capital={item.capital}
                            area={item.area}
                            urlFlagImage={item.urlFlagImage}
                        />
                    ))

                }
            </div>
        </ C.CountriesArea>
    )
}