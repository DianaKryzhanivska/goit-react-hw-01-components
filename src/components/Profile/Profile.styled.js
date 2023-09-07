import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  width: 500px;
  margin: 100px auto 100px;
  padding: 30px;
  background-color: lightgrey;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  text-align: center;
`;

export const StyledProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid gray;
  background-color: #fff;
  padding: 5px;
`;

export const StyledProfileStats = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  justify-content: space-between;
  gap: 30px;
  margin-top: 70px;
`;

export const StyledProfileStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
`;

export const StyledProfileName = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const StyledProfileFollowers = styled.span`
  color: #2a2a2a;
  font-weight: 700;
  font-size: 18px;
`;

export const StyledProfileViews = styled.span`
  color: #2a2a2a;
  font-weight: 700;
  font-size: 18px;
`;

export const StyledProfileLikes = styled.span`
  color: #2a2a2a;
  font-weight: 700;
  font-size: 18px;
`;
