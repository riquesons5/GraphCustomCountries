import * as C from './App.style';
import { CardCountrie } from './components/CardCountrie';
import { SearchArea } from './components/SearchArea';

function App() {
  return (
    <C.Container>
      <C.Area>
        <C.Title>Countries</C.Title>
        
        <SearchArea />

        <CardCountrie />

      </C.Area>
    </C.Container>
  );
}

export default App;
