import styled from 'styled-components';
import media from '../../../media';

export const Fullcontent = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    ${media.phone` 
    flex-direction:column;
    `}
  `;

export const Content = styled.div `
    display:flex;
    flex-direction:column;
    border: 1px, solid, rgb(236, 236, 236);
    padding: 1%;
    width:50%;
    font-size:85%;
    text-align:left;

    ${media.phone` 
        width:100%;
        font-size:70%;

    `}
  `;