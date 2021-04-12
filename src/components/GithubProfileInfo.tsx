import React from 'react';
import { GithubProfile } from '../api/github';

import './GithubProfileInfo.css';

export type GithubProfileInfoProps = {
	loading: boolean;
	error: Error | null;
	data: GithubProfile | null;
};


function GithubProfileInfo({ loading, error, data }: GithubProfileInfoProps) {

	if (loading) {
		return <p style={{ textAlign: 'center' }}>로딩중..</p>;
	}

	else if (error) {
		return <p style={{ textAlign: 'center' }}>{error.name}: {error.message}</p>
	}
	
	else if (data) {
		return (
			<div className="GithubProfileInfo">
				<div className="profile-head">
					<img src={data.avatar_url} alt="user thumbnail" />
					<div className="name">{data.name}</div>
				</div>
				<p>{data.bio}</p>
				<div className="url">url: {data.html_url !== '' && <a href={data.html_url}>{data.html_url}</a>}</div>
			</div>
		);
	}
	
	return null;
}

export default GithubProfileInfo;