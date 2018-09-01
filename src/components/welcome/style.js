import styled from 'styled-components';
import media from '../media';
import Artboard from './pics/Artboard.png';
import Artboard2 from './pics/Artboard2.png';
import Artboard2Phone from './pics/Artboard2Phone.png';
import Artboard3 from './pics/Artboard3.png';

/* .slide {
    margin: auto;
    height: 20em;
    overflow: hidden;
    font-size: 1em;
    line-height: 1em;
    display: table-cell;
    vertical-align: middle;
    background: none;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
    font-family: origin-super-condensed, sans-serif;
} */

// export const t = styled.div ` .title {     margin-top: 5px;     color:
// rgb(255, 0, 0) !important; } `

/* .carousel-caption {
    padding-bottom: 100px;
}
.ant-carousel.slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    overflow: hidden;
}
.ant-carousel.slick-slide h3 {
    color: #fff;
    position: absolute;
}
.ant-card-body {
    margin-left: 5%;
} */


export const Div1 = styled.div`
  background-image: url(${Artboard});
  ${media.phone` 
  background-image: url(${Artboard3});
`}
`;

export const Div2 = styled.div`
  background-image: url(${Artboard2});

    ${media.phone` 
  background-image: url(${Artboard2Phone});
`};
`;

export const Div3 = styled.div`
  background-image: url(${Artboard3});
`;

export const DivContent = styled.div`
width:45%;
${media.phone` 
width:99%;
`};
`;

export const DivContent2 = styled.div`
    width: 40%;
    float: right;
    ${media.phone` 
    width:99%;
    `};
`;

export const Divh3 = styled.h3`
margin-top:1vw;
color:white;
font-style:oblique;
text-decoration: underline;
${media.phone` 
font-size:90%;
margin-top:3vw;
margin-bottom:15vw;
`};
`;

export const Divh4 = styled.h4`
padding:1vw;
padding-right: 3vw;
color:white;
font-weight:100;
text-align:justify;
font-size:100%;
${media.phone` 
font-size:75%;
`};
`;

export const Divh42 = styled.h4`
padding:1vw;
color:white;
font-weight:100;
text-align:justify;
font-size:100%;
${media.phone` 
font-size:85%;
`};
`;

/* .slide {
    background: none;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
    font-family: origin-super-condensed, sans-serif;
} */

/* .ant-carousel .slick-dots li button {
    background: rgb(252, 4, 4);
} */