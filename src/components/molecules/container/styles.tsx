import styled from 'styled-components';

// styled component
export const Container = styled.div`
    display: grid;
    gap: 1.5em;
    margin: 1.5em 0;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;