'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import ProfileStats from '@/components/profile/ProfileStats';
import EditProfileButton from '@/feature/profile/EditProfileButton';
import LocationWebsite from '@/components/profile/LocationWebsite';
import MyLikePosts from '@/components/profile/MyLikePosts';
import { ProfilePageClientProps } from '@/types/profile/profile.type';

function ProfilePageClient({
	likedPosts,
	posts,
	user,
	followingUsers,
	followersUsers,
}: ProfilePageClientProps) {
	return (
		<div className="max-w-3xl mx-auto">
			<div className="grid grid-cols-1 gap-6">
				<div className="w-full max-w-lg mx-auto">
					<Card className="bg-card">
						<CardContent className="pt-6">
							<div className="flex flex-col items-center text-center">
								<Avatar className="w-24 h-24">
									<AvatarImage src={user.image ?? '/avatar.png'} loading="lazy" />
								</Avatar>
								<h1 className="mt-4 text-2xl font-bold">{user.name ?? user.username}</h1>
								<p className="text-muted-foreground">@{user.username}</p>
								<p className="mt-2 text-sm">{user.bio}</p>
								{/* PROFILE STATS */}
								<ProfileStats user={user} followingUsers={followingUsers} followersUsers={followersUsers} />
								{/* "FOLLOW & EDIT PROFILE" BUTTON */}
								<EditProfileButton user={user} />
								{/* LOCATION & WEBSITE */}
								<LocationWebsite user={user} />
							</div>
						</CardContent>
					</Card>
				</div>
				{/*SHOW LIKED_POSTS POSTS*/}
				<section>
					<MyLikePosts user={user} likedPosts={likedPosts} posts={posts} />
				</section>
			</div>
		</div>
	);
}
export default ProfilePageClient;
