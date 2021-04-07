import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  url: string;
};

function GithubProfileInfo({ name, thumbnail, bio, url }: GithubProfileInfoProps) {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{name}</div>
      </div>
      <p>{bio}</p>
      <div className="url">url: {url !== '' && <a href={url}>{url}</a>}</div>
    </div>
  );
}

export default GithubProfileInfo;