import { Story } from '@storybook/react';
import GithubProfile, { GithubProfileInfoProps } from './GithubProfileInfo';

export default {
  component: GithubProfile,
  title: 'GithubProfile',
};

const Template: Story<GithubProfileInfoProps> = (args) => <GithubProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: "테스트",
  thumbnail: "",
  bio: "",
  url: ""
}