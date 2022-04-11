import styled from "styled-components";

export const CountryItem = styled.div`
    background-color: #20212C;
    border-radius: 4px;
    align-items: center;

    a {
        text-decoration: none;
        color: #797A81;
    }

    .img--area{
        img {
            width: 100%;
            height: 150px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }

    .data--area {
        padding: 10px 20px;
        p {
            font-size: 16px;
            font-weight: 500;
            margin: 10px 0px;
            span {
                font-weight: 300
            }
        }
    }

    .country--name {
        font-size: 17px;
        margin: 10px 0px;
    }
`;