import styled from 'styled-components';
import ReactSelect from 'react-select';

export const FormContent = styled.div`
  padding: 8px 15px;
`;

export const Row = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
  }
`;

export const MultipleItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  label {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const ReactSelectElement = styled(ReactSelect)`
  width: 200px;
  margin-top: 9px;
  padding: 2px;
`;
