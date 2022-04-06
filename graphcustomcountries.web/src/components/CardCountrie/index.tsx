import { useEffect } from 'react';

import { Container, Card, Image, Title, Section, Button } from './styles';
import { connect } from 'react-redux';
import { removeAllCountries, addAllCountries } from '../../store/reducers/Countries/CountriesActions';

function mapStateToProps(state:any) {
    return {
        countries: state.Countries.countries
    }
};

function mapDispatchToProps(dispatch:Function) {
    return {
        removeAllCountries: () => dispatch(removeAllCountries()),
        addAllCountries: () => dispatch(addAllCountries())
    };
}

const CardCountrie = (props:any) => {
    const {countries = []} = props;

    useEffect(() => {
        props.addAllCountries();
    }, []);

    console.log(countries);

    return (
        <Container>
            {   
                countries.map((country:any) => (
                    <Card key={country.Id.toString()}>
                        <Image src="https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg/@@images/image" />
                        <Title>{country.name}</Title>
                        <Section>Capital: <b>{country.Capital}</b></Section>
                        <Button>Ver detalhes</Button>
                    </Card>
                ))
            }            
        </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCountrie);