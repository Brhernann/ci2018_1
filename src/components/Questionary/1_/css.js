import styled from 'styled-components';
import media from '../../media';

export const FirstContent = styled.div `
    display: flex;
    justify-content:center;
`

export const FirstChild = styled.div `
width:55%;
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
text-align: -webkit-auto;
`;

export const Paragraph = styled.p`
    margin-bottom: 25px;
    text-align: justify;

`;
