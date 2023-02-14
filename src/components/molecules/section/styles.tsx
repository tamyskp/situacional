import styled from 'styled-components';

// styled component
export const SectionHolder = styled.section`
    grid-template-columns: repeat(12, 1fr);
    display: grid;
    background-position: center center;
    background-repeat: no-repeat;
    background-Size: cover;
    background-attachment: fixed;
`;
    
export const Section = styled.div`
    grid-column-start: 3;
    grid-column-end: 11;
    display: flex;
    flex-direction: column;
    padding: 6em 8em;
`;