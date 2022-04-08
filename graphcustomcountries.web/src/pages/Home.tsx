import { Container, Area, Title } from '../App.style';
import CardCountrie from '../components/CardCountrie';
import { SearchArea } from '../components/SearchArea';
import { Provider } from 'react-redux';
import store from '../store';

export function Home() {
    return (
        <Provider store={store}>
            <Container>
                <Area>
                    <Title>Countries</Title>

                    <SearchArea />

                    <CardCountrie />

                </Area>
            </Container>
        </Provider>
    );
}