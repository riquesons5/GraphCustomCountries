import styled from "styled-components";

export const FormData = styled.div`
    .container {
        width: 100%;
    }

    .input--bloc {
        margin: 0 auto;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 400px;

        label {
            width: 100%;
            font-size: 16px;
            font-weight: 500;
            margin: 5px 0px;
        }

        input {
            border: 1px solid #555;
            border-radius: 5px;
            padding: 10px;
            background: transparent;
            outline: 0;
            color: #FFF;
            font-size: 18px;
            margin: 5px 0px;
            height: 50px;
            width: 100%;
        }

        input[type="text"]:disabled {
            background: #666;
        }

        
    }

    button {
        text-decoration: none;
        border-radius: 5px;
        color: #000;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        background-color: #20212C;
        color: #797A81;
        transition: .2s;
        border: 0;
        cursor: pointer;
        width: 400px;

        &:hover {
            background-color: #797A81;
            color: #17181F;
        }
    }
`;