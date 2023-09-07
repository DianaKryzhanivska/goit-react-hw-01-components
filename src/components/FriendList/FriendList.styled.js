import styled from 'styled-components';

export const StyledFriendList = styled.ul`
  width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledFriendItem = styled.li`
  display: flex;
  padding: 10px;
  background-color: lightskyblue;
  border-radius: 10px;
`;

export const StyledStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

export const StyledImg = styled.img`
  margin-left: 20px;
  margin-right: 20px;
`;

export const StyledText = styled.p`
  font-size: 24px;
`;
