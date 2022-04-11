import * as C from "./styles";

export const Input = () => {
    return (
        <C.InputArea>
            <div className="icon--img">
                🔎
            </div>
            <input 
                type="text" 
                placeholder="Pesquise por nome"
            />
        </C.InputArea>
    );
}