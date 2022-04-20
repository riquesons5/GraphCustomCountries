import * as C from "./styles";
import { useEffect, useState } from 'react';
import { Input } from '../../Components/Input';
import { CountryTS } from '../../types/Country';
import { CountryItem } from '../../Components/CountryItem';
import { api } from '../../api';
import Pagination from './pagination';

const LIMIT = 8;

export const Countries = () => {
    const [countries, setCountries] = useState<CountryTS[]>([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        getAllCountries()
    }, []);

    const getAllCountries = async () => {
        setLoading(true);
        let countries = await api.getCountries();
        setCountries(countries);
        setLoading(false);
    };

    const lowerSearch = search.toLowerCase();

    const filteredCountries = countries.filter(country => country
        .name.toLowerCase().includes(lowerSearch));

    const pagCountries = filteredCountries.slice(offset, offset + 8);

    return (
        <C.CountriesArea>
            <Input
                value={search}
                search={setSearch}
            />
            <div className='countries'>
                {loading &&
                    <div className=''>Carregando...</div>
                }
                {!loading &&
                    pagCountries.map((item) => (
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
            <Pagination
                limit={LIMIT}
                total={filteredCountries.length}
                offset={offset}
                setOffset={setOffset}
            />
        </ C.CountriesArea>
    )
}