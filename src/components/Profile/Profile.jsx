import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProfileFollowers,
  StyledProfileImg,
  StyledProfileLikes,
  StyledProfileName,
  StyledProfileStats,
  StyledProfileStatsItem,
  StyledProfileViews,
  StyledProfileWrapper,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <StyledProfileWrapper>
      <div className="description">
        <StyledProfileImg src={avatar} alt="User avatar" />
        <StyledProfileName className="name">{username}</StyledProfileName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StyledProfileStats>
        <StyledProfileStatsItem>
          <StyledProfileFollowers>Followers</StyledProfileFollowers>
          <span className="quantity">{stats.followers}</span>
        </StyledProfileStatsItem>
        <StyledProfileStatsItem>
          <StyledProfileViews>Views</StyledProfileViews>
          <span className="quantity">{stats.views}</span>
        </StyledProfileStatsItem>
        <StyledProfileStatsItem>
          <StyledProfileLikes>Likes</StyledProfileLikes>
          <span className="quantity">{stats.likes}</span>
        </StyledProfileStatsItem>
      </StyledProfileStats>
    </StyledProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.node,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
