import { Story } from '@storybook/react';
import GithubProfileInfo, { GithubProfileInfoProps } from './GithubProfileInfo';

export default {
  component: GithubProfileInfo,
  title: 'GithubProfileInfo',
};

const Template: Story<GithubProfileInfoProps> = (args) => <GithubProfileInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
	loading: false,
	error: null,
	data: {
		login: "Test",
		id: 1,
		node_id: "Test",
		avatar_url: "https://avatars.githubusercontent.com/u/22072890?v=4",
		gravatar_id: "Test",
		url: "Test",
		html_url: "https://github.com/potaru",
		followers_url: "Test",
		following_url: "Test",
		gists_url: "Test",
		starred_url: "Test",
		subscriptions_url: "Test",
		organizations_url: "Test",
		repos_url: "Test",
		events_url: "Test",
		received_events_url: "Test",
		type: "Test",
		site_admin: false,
		name: "Paul_Bang",
		company: "Test",
		blog: "Test",
		location: null,
		email: null,
		hireable: null,
		bio: "23세 프론트엔드 엔지니어 방진성입니다",
		public_repos: 1,
		public_gists: 1,
		followers: 1,
		following: 1,
		created_at: new Date(),
		updated_at: new Date()
	}

}

export const Loading = Template.bind({});
Loading.args = {
	loading: true,
	error: null,
	data: null
}

export const Error = Template.bind({});
Error.args = {
	loading: false,
	error: {
		name: "Something Error",
		message: "Error"
	},
	data: null
}