import {
	getFollowersUsers,
	getFollowingUsers,
	getProfileByUsername,
	getUserLikedPosts,
	getUserPosts,
	isFollowing,
} from '@/actions/profile.action';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { username: string } }) {
	const username = params.username;

	const user = await getProfileByUsername(username);
	if (!user) return null;

	return {
		title: `${user.name ?? user.username}`,
		description: user.bio || `Check out ${user.username}'s profile.`,
	};
}

export async function fetchProfileData(username: string) {
	const user = await getProfileByUsername(username);
	if (!user) notFound();

	const [posts, likedPosts, isCurrentUserFollowing, followingUsers, followersUsers] = await Promise.all([
		getUserPosts(user.id),
		getUserLikedPosts(user.id),
		isFollowing(user.id),
		getFollowingUsers(user.id),
		getFollowersUsers(user.id),
	]);
	// console.log(followersUsers);
	return { user, posts, likedPosts, isCurrentUserFollowing, followingUsers, followersUsers };
}
