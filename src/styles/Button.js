import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #DEAE60;
  width: calc(100vw - 50px);
  height: 46px;
  border: none;
  border-radius: 5px;
  background-color: #323750;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;

export default Button;
