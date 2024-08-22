import styled from 'styled-components';


export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 743.81px;
    margin: 10px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: #1E123B;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 296.98px;
    height: auto;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5rem;
    color: #FFF;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const SourceBar = styled.input`
    width: 100%;
    max-width: 308.64px;
    height: 42.44px;
    background-color: transparent;
    border: #FFFFFF solid 1px;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 20px;
    box-sizing: border-box;
    color: #FFFFFF;
    @media (max-width: 768px) {
        max-width: 90%;
        font-size: 0.9rem;
    }
`;

export const TaskBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 674.37px;
    background-color: #FCFCFC;
    border: #3C424A solid 0.7px;
    border-radius: 8px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 0.8rem;
    text-align: center;
    margin: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 95%;
    }
`;

export const StatusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background-color: #BDA4FF;
    border: #8758FF solid 0.7px;
    border-radius: 4px;
`;

export const GridButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        gap: 5px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background-color: transparent;
    border: #1E123B solid 1.5px;
    border-radius: 4px;
`;