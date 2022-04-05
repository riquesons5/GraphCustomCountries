import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Card = styled.div`
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
    width: 30%;
`;

export const Image = styled.img`
    margin: 10px 0;
    width: 65%;
`;

export const Title = styled.h2`
    margin: 15px;
`;

export const Section = styled.div`
    margin-bottom: 25px;
`;

export const Button = styled.button`
    background-color:  #17181F;
    border: 0;
    border-radius: 8px;
    box-sizing: border-box;
    color: #797A81;
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
        background: #797A81;
        color: #17181F;
      }
`;
