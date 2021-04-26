import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getUserProfileAsync } from '../modules/github';
import GithubUsernameForm from './GithubUsernameForm';
import GithubProfileInfo from './GithubProfileInfo';

function GithubProfileContainer() {
  const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileAsync.request(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
			<GithubProfileInfo loading={loading} error={error} data={data}/>
    </>
  );
}

export default GithubProfileContainer;