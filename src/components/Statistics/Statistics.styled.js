import styled from 'styled-components';

export const StyledStatisticsSection = styled.section`
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 500px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0, 0, 0) 1px 1px 8px 0px;
  padding-top: 50px;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledStatisticsTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const StyledStatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  border: 1px solid gray;
`;

export const StyledStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid gray;
  text-align: center;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.color};
`;

export const StyledStatisticsPercentage = styled.span`
  font-size: 18px;
`;
