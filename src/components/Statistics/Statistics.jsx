import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStatisticsItem,
  StyledStatisticsList,
  StyledStatisticsPercentage,
  StyledStatisticsSection,
  StyledStatisticsTitle,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats = [] }) => {
  return (
    <StyledStatisticsSection>
      <StyledStatisticsTitle>{title}</StyledStatisticsTitle>

      <StyledStatisticsList>
        {stats.map(item => (
          <StyledStatisticsItem key={item.id} color={getRandomHexColor()}>
            <span className="label">{item.label}</span>
            <StyledStatisticsPercentage>
              {item.percentage}%
            </StyledStatisticsPercentage>
          </StyledStatisticsItem>
        ))}
      </StyledStatisticsList>
    </StyledStatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
