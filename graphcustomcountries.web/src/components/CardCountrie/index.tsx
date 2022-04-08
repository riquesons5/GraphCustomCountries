import { useEffect } from 'react';
import { Container, Card, Image, Title, Section, Button } from './styles';
import { connect } from 'react-redux';
import { removeAllCountries, addAllCountries } from '../../store/reducers/Countries/CountriesActions';
import { Link } from 'react-router-dom';

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
        props.removeAllCountries();
    }, []);

    useEffect(() => {
        props.addAllCountries();
    }, []);

    return (
        <Container>
            {   
                countries.map((country:any) => (
                    <Card key={country.id.toString()}>
                        <Image src={country.urlFlagImage} />
                        <Title>{country.name}</Title>
                        <Section>Capital: <b>{country.capital}</b></Section>
                        <Link to={`/detailCard/${country.id}`} >
                            <Button>Ver detalhes</Button>
                        </Link>
                    </Card>
                ))
            }            
        </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardCountrie);