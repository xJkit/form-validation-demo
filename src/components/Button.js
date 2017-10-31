import styled from 'styled-components';

export default styled.button`
  background-color: ${props => props.btnStyle === 'primary' ? '#2186C9' : 'white'};
  color: ${props => props.btnStyle === 'primary' ? 'white' : '#2186C9'};
  padding: 4px 8px;
  border: ${props => props.btnStyle === 'primary' ? '0' : '1px solid #2186C9'};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  line-height: 1.6;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }
`;