import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import React from 'react';

export function WhoFollowing({ followingUsers, user }: any) {
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link" className="no-underline block">
					<div className="font-semibold">{user._count.following}</div>
					<div className="text-sm text-muted-foreground">Following</div>
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-auto">
				<div className="flex justify-between space-x-4">
					<div className="space-y-1">
						{followingUsers.map((userName: any) => (
							<p className="text-sm" key={userName.id}>
								{userName.name}
							</p>
						))}
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
