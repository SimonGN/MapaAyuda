import styled from 'styled-components';


const FooterStyle = styled.div`
margin: 0 auto;
width:90vw;
padding-bottom:5%;
    nav{
        display:none;
    }
    .icon{
        display:none;
    }
    .green{
        background-color:#8ED7BF;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        height:370px;
        flex-flow:column;
        justify-content:center;
        display: ${props => (props.display ? props.display : 'none')};
    }
    .textGreen{
        margin:0 20%;
        text-align:center;
        p{
            margin-top:8%;
            margin-bottom:8%;
        }
    }
    .button{
        margin: 0 auto;
        margin-left: 7%;
        margin-right: 7%;
       
    }
    .greenOpacity{
        background-color:#8ED7BF40;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        width:90vw;
        height:auto;
        margin: 0 auto;
        position:relative;
    }
    .iconWord{
        position: absolute;
        width: 30%;
        margin: 0 auto;
        text-align: center;
        top: -3%;
        left: 35%;
        img{
            width:100%;
            margin: 0 auto; 
        }
    }
    .textGreenOpacity{
        width:90%;
        padding-top: 35%;
        margin: 0 auto;
        display:flex;
        flex-flow:column;
        justify-content: space-evenly;

    }
    .nameText{
        width: 100%;
    }
    .navSeo{
        width:80%;
        margin:0 auto;
    }
    .idioms, .idiomsMovil{
        order: 1;
        display:flex;
        width:50%;
        margin: 0 auto;
        justify-content: space-between; 
        margin-bottom:20%;
    }
    .idioms{
        display:none;
    }
    Link{
        text-align:center;
    }
    .legal{
        width:95%;
        margin:0 auto;
        margin-bottom:10%;
        & > p{
            text-align:center;
            margin-bottom:5%;
        }
    }
    .sectionLegal{
        width:100%;
        display:flex;
        justify-content: space-between; 
    }
    
    .navegation, .voluntary, .moreInfo{
        margin-bottom:20%;
        & > p{
            margin-bottom: 12px;
        } 
    }

    
    @media only screen and (min-width:415px) and (max-width:768px){
        .green{
            height:460px;
        }
        .iconWord{
            top: -4%;
            left: 41%;
            width: 18%;
        }
        .navSeo{
            width:85%;
        }
        .idiomsMovil{
            width:30%;
        }
        .textGreenOpacity{
            padding-top: 18%;
        }
        .legal{
            margin-bottom:5%;
        }
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        padding-bottom: 3%;
        .green{
            height: 450px;
        }
       .button{
            margin: 0 auto;
       }
       .icon{
            display: block;
            position: relative;
            width: 12%;
            top: -23%;
            left: 84%;
            img{
                width:100%;
            }
        }
       .iconWord{
            width: 10%;
            top: -14%;
            left: 5%;
            img{
                width:100%;
            }
        }
        .textGreenOpacity{
            padding-top: 100px;
            display: flex;
            flex-direction: row-reverse;
        }
        .idiomsMovil{
            display:none;
        }
        .idioms{
            display:block;
        }
        .navSeo{
            display:flex;
            justify-content:space-between;
            width:75%; 
        }
        .nameText{
            width:25%;
            flex-direction: column;
        }
        .idioms{
            display:flex;
            width:70%;
            margin: 0;
            margin-bottom: 28%;
            margin-top: 3%;
        }
        .legal{
            margin:0;
            & > p{
                text-align:left;
                margin-bottom: 16%;
            }
        }
        .sectionLegal{
            display:flex;
            flex-direction:column;
            & >p{
                margin-bottom: 0px;
            }

        }
        .navegation{
            margin-bottom: 10%;
            & >p{
                margin-bottom: 12px;
            }
        }
        .navegation, .voluntary, .moreInfo{
            margin-bottom: 10%;
        }
    }
    
    @media only screen and (min-width:1025px) {
        width:95vw;
        padding-bottom: 2%;
        .icon{
            display: block;
            position: absolute;
            width: 150px;
            top: -15%;
            left: 84%;
            img{
                width:100%;
            }
        }
        .green{
            height: 480px;
            position:relative;
        }
        .button{
            margin: 0 auto;
            margin-bottom: 0%;
        }
        .iconWord{
            width: 6%;
            top: -15%;
            left: 12%;
            img{
                width:100%;
            }
        }
        .greenOpacity{
            width:100%;
        }
        .textGreen{
            & > p{
                width: 50%;
                margin: 0 auto;
                margin-top:6%;
                margin-bottom:6%;
            }
        }
        .textGreenOpacity{
            width: 75%;
            padding-top: 100px;
            display: flex;
            flex-direction: row-reverse;
            
        }
        .idiomsMovil{
            display:none;
        }
        .navSeo{
            display:flex;
            justify-content:space-between;
            width:75%; 
        }
        .nameText{
            width:25%;
            flex-direction: column;
        }
        .idioms{
            display:flex;
            width:150px;
            margin: 0;
            margin-bottom: 12%;
            margin-top: 3%;
        }
        .legal{
            margin:0;
            & > p{
                text-align:left;
                margin-bottom: 16%;
            }
        }
        .sectionLegal{
            display:flex;
            flex-direction:column;
            & >p{
                margin-bottom: 0px;
            }

        }
        .navegation{
            margin-bottom: 10%;
            & >p{
                margin-bottom: 12px;
            }
        }
        .navegation, .voluntary, .moreInfo{
            margin-bottom: 10%;
        }
    }
    
    
    

`;

export { FooterStyle };
