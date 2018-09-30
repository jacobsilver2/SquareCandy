import styled from 'styled-components';
import { elevation, transition, black } from 'utilities'

export const Card = styled.div`
    position: relative;
    background: white;
    border-radius: 5px;
    padding: 15px;
    color: ${black}
    ${elevation[4]}
    ${transition({
        ease: 'ease-in',
        length: '1s'
    })}
    &:hover {
        ${elevation[5]}
    }
`;