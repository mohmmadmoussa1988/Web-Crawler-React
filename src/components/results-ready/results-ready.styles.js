import styled from 'styled-components'
export const ChartBox = styled.div`
display:flex;
flex-direction:row;
width:50%;
margin:0 auto;
margin-top:5%;
padding-bottom:20%;
`;
export const Chartimg = styled.img`
    width:50%;
`;
export const StyledLink = styled.div`
    width: 50%;
    text-align: center;
    margin-top: 21%;
    height: auto;
a{
    text-decoration: none;
    font-weight: bold;
    background: #F4811D;
    padding: 5%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px black;
    cursor: pointer;
    color: white;

    
}
`;

export const ClearButton = styled.button`
   text-decoration: none;
    font-weight: bold;
    background: red;
    padding: 2%;
    border-radius: 10px;
    box-shadow: 0px 0px 4px black;
    cursor: pointer;
    color: white;
    height:50px;
    margin-left:20px;
`;