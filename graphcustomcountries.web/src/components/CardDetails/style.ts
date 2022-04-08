import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ReturnButton = styled.div`
    width: 100%;
    margin: 10px 0 40px 0;
    display: flex;
    justify-content: flex-end;

    button {
        font-size: 22px;
        text-align: left;
        color: #797A81;
        background: transparent;
        border: 0px;
        cursor: pointer;
    }
`;

export const Details = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Image = styled.img`
    flex: 1;
    width: 50%;
    padding: 20px;
`;

export const Description = styled.div`
    flex: 2;
    padding: 20px;

    h2 {
        font-size: 2rem;
        padding: 0;
        margin: 0 0 50px;
    }

    p {
        margin: 5px 0;
    }

    button{
        margin-top: 50px;
        background-color:  #797A81;
        border: 0;
        border-radius: 8px;
        box-sizing: border-box;
        color: #17181F;
        cursor: pointer;
        font-size: 1rem;
        justify-content: center;
        text-align: center;
        line-height: 1rem;
        padding: 20px 15px;
        transition: .2s;
        width: 90%;
        font-weight: bold;

        &:hover {
            background: #20212C;
            color: #797A81;
        }
    }
`