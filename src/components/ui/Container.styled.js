import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    font-weight: ${p => p.theme.fontWeights.normal};
`;


