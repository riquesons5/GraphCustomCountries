import { Container, Area, Title } from './App.style';
import CardCountrie from './components/CardCountrie';
import { SearchArea } from './components/SearchArea';
import { Provider } from 'react-redux';
import store from './store';

function App() {
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

export default App;
