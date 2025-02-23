import React from 'react';
import { ProfileStatsProps } from '@/types/profile/profile.type';
import { Separator } from '@/components/ui/separator';
import { WhoFollowing } from '@/components/profile/WhoFollowing';
import { WhoFollower } from '@/components/profile/WhoFollower';

function ProfileStats({ user, followingUsers, followersUsers }: ProfileStatsProps) {
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-4">
				<div>
					<WhoFollowing followingUsers={followingUsers} user={user} />
				</div>
				<Separator orientation="vertical" />
				<div>
					<WhoFollower followersUsers={followersUsers} user={user} />
				</div>
				<Separator orientation="vertical" />
				<div>
					<div className="font-semibold">{user._count.posts.toLocaleString()}</div>
					<div className="text-sm text-muted-foreground">Posts</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileStats;
