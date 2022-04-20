import { useState } from "react";
import { InputTS } from "../../types/Input";
import * as C from "./styles";
import useDebounce from './useDebounce';

const delay = 500;

export const Input = ({value, search}: InputTS) => {
    const [input, setInput] = useState('');

    const deboucedChange = useDebounce(search, delay)

    const handleChange = (e: string) => {
        deboucedChange(e)
        setInput(e);
        console.log(e);
    }

    return (
        <C.InputArea>
            <div className="icon--img">
                🔎
            </div>
            <input 
                type="text" 
                placeholder="Pesquise por nome"
                value={input}
                onChange={e => handleChange(e.target.value)}
            />
        </C.InputArea>
    );
}