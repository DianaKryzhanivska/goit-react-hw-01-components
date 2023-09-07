import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTableHead,
  StyledTableRow,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTable className="transaction-history">
      <thead>
        <tr>
          <StyledTableHead>Type</StyledTableHead>
          <StyledTableHead>Amount</StyledTableHead>
          <StyledTableHead>Currency</StyledTableHead>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <StyledTableRow key={id} $idx={index % 2 === 0}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </StyledTableRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
