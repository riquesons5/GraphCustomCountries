import styled from "styled-components";

export const CountryUpdate = styled.main`
    height: calc(100vh - 90px);

    .container {
        width: 1024px;
        margin: auto;
        padding: 40px 0px;

        .loading {
            min-height: 100vh;
        }

        .back--button {
            text-decoration: none;
            color: #000;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 40px;
            background-color: #20212C;
            color: #797A81;
            transition: .2s;

            &:hover {
                background-color: #797A81;
                color: #17181F;
            }
        }
    }
`;