import styled from "styled-components";

export const CountriesArea = styled.main`
    min-height: calc(100vh) - 90px;
    transition: all ease 0.2s;
    .countries {
        display: grid;
        width: 1024px;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }

    .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
        padding: 20px 0px;

        button {
            height: 40px;
            width: 40px;
            background-color: #20212C;
            color: #797A81;
            border: none;
            box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
            margin: 2px;
            cursor: pointer;
        }

        .active {
            font-weight: bold;
            text-decoration: underline;
        }
    }
`;