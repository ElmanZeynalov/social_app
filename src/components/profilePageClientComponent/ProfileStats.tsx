import React from 'react';
import { Separator } from '@/components/ui/separator';
import { getProfileByUsername } from '@/actions/profile.action';

type User = Awaited<ReturnType<typeof getProfileByUsername>>;

interface ProfileStats {
	user: NonNullable<User>;
}

function ProfileStats({ user }: { user: ProfileStats }) {
	// const { user } = useUser();
	return (
		<div className="w-full mt-6">
			<div className="flex justify-between mb-4">
				<div>
					<div className="font-semibold">{user._count.following.toLocaleString()}</div>
					<div className="text-sm text-muted-foreground">Following</div>
				</div>
				<Separator orientation="vertical" />
				<div>
					<div className="font-semibold">{user._count.followers.toLocaleString()}</div>
					<div className="text-sm text-muted-foreground">Followers</div>
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
