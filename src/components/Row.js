import styled from 'styled-components';

export default styled.div`
position: relative;
width: 400px;
margin: 0 auto;

> * {
  display: inline-block;
}

> .title {
  margin-right: 8px;
}

.form-error {
  position: absolute;
  right: 0;
  top: 0;
  color: red;
  font-size: 12px;
}

.form-warning {
  position: absolute;
  right: 0;
  top: 0;
  color: orange;
  font-size: 12px;
}
`