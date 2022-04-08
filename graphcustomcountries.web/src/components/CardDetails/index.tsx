import { Link } from "react-router-dom";
import { Container, ReturnButton, Details, Image, Description } from "./style";
import { addCountry } from '../../store/reducers/Countries/CountriesActions';
import { useEffect } from "react";
import { connect } from "react-redux";

// function mapStateToProps(state:any) {
//     debugger
//     return {
//         country: state.Country.country
//     }
// }

// function mapDispatchToProps(dispatch:Function) {
//     debugger
//     return {
//         addCountry: () => dispatch(addCountry(1)),
//     };
// }

const CardDetails = (props:any) => {
    // const {country = []} = props;

    // useEffect(() => {
    //     props.addCountry();
    // }, []);

    return (
        <Container>
            <ReturnButton>
                <Link to="/" >
                    <button>⬅</button>
                </Link>
            </ReturnButton>
            <Details>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" />
                <Description>
                    <h2>Brasil</h2>
                    <p>Capital: <b>Brasilia</b></p>
                    <p>Área: <b>8516000</b></p>
                    <p>População: <b>2126000000</b></p>
                    <p>Densidade demográfica: <b>23.8</b></p>

                    <Link to="/" >
                        <button>Alterar informações</button>
                    </Link>
                </ Description>
            </Details>
        </Container>
    );
}

// export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
export default CardDetails;