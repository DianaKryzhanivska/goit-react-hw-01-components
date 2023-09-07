import React from 'react';
import {
  StyledFriendItem,
  StyledFriendList,
  StyledImg,
  StyledStatus,
  StyledText,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => {
        const { isOnline, avatar, name } = friend;
        return (
          <StyledFriendItem className="item" key={friend.id}>
            <StyledStatus $isOnline={isOnline}></StyledStatus>
            <StyledImg src={avatar} alt="User avatar" width="62" />
            <StyledText className="name">{name}</StyledText>
          </StyledFriendItem>
        );
      })}
    </StyledFriendList>
  );
};
