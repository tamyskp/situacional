import styled from 'styled-components';

// styled component
export const CardListHolder = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;
export const Cards = styled.div`
    grid-column-start: 1;
    grid-column-end: 13;
    display: flex;
    flex-wrap: nowrap;
    justify-content: stretch;
    width: 100%;
`;