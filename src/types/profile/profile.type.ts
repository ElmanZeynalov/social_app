import { getProfileByUsername, getUserPosts } from '@/actions/profile.action';

type User = Awaited<ReturnType<typeof getProfileByUsername>>;
type Posts = Awaited<ReturnType<typeof getUserPosts>>;

export interface ProfilePageClientProps {
	user: NonNullable<User>;
	posts: Posts;
	likedPosts: Posts;
	isFollowing: boolean;
	followingUsers: User[];
	followersUsers: User[];
}

export interface ProfileStatsProps {
	user: NonNullable<User>;
	_count: {
		count: number;
		following: number;
		followers: number;
		posts: Posts;
	};
	followingUsers: User[];
	followersUsers: User[];
}
