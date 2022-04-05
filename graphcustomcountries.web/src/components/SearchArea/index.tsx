import * as C from './styles';

export const SearchArea = () => {
    return (
        <C.Container>
            <div className="image">🔎</div>
            <input
                type="text"
                placeholder="Pesquisar"
            />
        </C.Container>
    );
}