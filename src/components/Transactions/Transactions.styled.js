import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
  border: 1px solid gray;
`;

export const StyledTableHead = styled.th`
  background-color: lightskyblue;
  padding: 5px;
`;

export const StyledTableRow = styled.tr`
  background-color: ${props => (props.$idx % 2 === 0 ? 'lightblue' : 'white')};
`;
