import { Container, Area, Title } from '../App.style';
import { Provider } from 'react-redux';
import CardDetails from '../components/CardDetails';
import store from '../store';

export function Details() {
    return (
        <Provider store={store}>
            <Container>
                <Area>
                    <Title>Countries</Title>

                    <CardDetails />
                </Area>
            </Container>
        </Provider>
    );
}