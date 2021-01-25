import styled from 'styled-components'

export const FormBox = styled.div`
display:flex;
flex-direction:'row';
`;

export const InputBox = styled.div`
display:flex;
margin-bottom:30px;
margin-top:30px;
@media only screen and (max-width: 375px) {
flex-direction:column;
text-align:center;
}
`;

export const InputLabel = styled.label`
width:30%;
@media only screen and (max-width: 375px) {
width:100%;    
}
`;

export const ButtonBox = styled.input.attrs({ 
    type: 'submit',
    value: 'Submit'
  })`
    background: #00aec9;
    color: #fff;
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    &:active {
      background-color: #f1ac15;
    }
  `;


export const Textinput = styled.input.attrs({ 
    type: 'text',
    name:'searchterm'
  })`
    background-color:'#eee';
    width:70%;
    padding:1%;
    border-radius:10px;
    border:1px solid #eee;
    @media only screen and (max-width: 375px) {
        width:100%;
        margin-top:20px;
        padding:3% 1%;
    }
  `;

  export const ErrorSpan = styled.div`
  color:red;
  text-align:center;
  margin-bottom:30px;
  `;

