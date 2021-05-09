import styled from 'styled-components'

const Button = styled.button`
border:1px solid ${props => props.invalid ? 'red' : 'blue'};

&:hover{
    border:1px solid green;
}
`;

export default Button;
