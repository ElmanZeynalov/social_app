import ProfilePageClient from './ProfilePageClient';
import { fetchProfileData } from '@/app/profile/[username]/util';

async function ProfilePageServer({ params }: { params: Promise<{ username: string }> }) {
	const { username } = await params;
	const { user, posts, likedPosts, isCurrentUserFollowing, followingUsers, followersUsers } =
		await fetchProfileData(username);

	return (
		<ProfilePageClient
			user={user}
			posts={posts}
			likedPosts={likedPosts}
			isFollowing={isCurrentUserFollowing}
			followingUsers={followingUsers}
			followersUsers={followersUsers}
		/>
	);
}
export default ProfilePageServer;
