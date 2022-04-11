import styled from "styled-components";

export const CountryData = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    img {
        width: 440px;
        height: 300px;
    }

    .data--area {
        display: flex;
        flex-direction: column;

        h1 {
            margin: 0px;
        }

        .data--information {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 20px;

            p {
                margin: 5px 0px;
                span {
                    font-weight: bold;
                }
            }
        }

        .update--button {
            text-decoration: none;
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

            &:hover {
                background-color: #797A81;
                color: #17181F;
            }
        }
    }
`;