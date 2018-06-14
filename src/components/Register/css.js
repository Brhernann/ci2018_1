import styled, {css} from 'styled-components';
import media from '../media';

export const FirstContent = styled.div `
    display: flex;
    justify-content:center;
`

export const FirstChild = styled.div `
width:50%;
text-align:left;
${media.phone` 
width:100%;
font-size:10px;
`}
`;

export const FormContent = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
`;
