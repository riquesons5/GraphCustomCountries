import styled from "styled-components";

export const FormData = styled.div`
    .container {
        width: 100%;

        form {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .input--bloc {
        flex: 1;
        display: flex;
        flex-direction: column;

        span {
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
            width: 400px;
        }
    }
`;