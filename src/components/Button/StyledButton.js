import styled from 'styled-components';

const StyledButton = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 40px;
  font-size: 13px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 25px;
  padding-right: 25px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  font-weight: 800;
`;

export {
  StyledButton,
};

