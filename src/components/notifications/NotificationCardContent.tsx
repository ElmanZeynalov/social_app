import React from 'react';
import { CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import NotificationIcon from '@/components/notifications/NotificationIcon';
import { formatDistanceToNow } from 'date-fns';
import { useNotifications } from '@/feature/notifications/useNotifications';

function NotificationCardContent() {
	const { notifications } = useNotifications();
	return (
		<CardContent className="p-0">
			<ScrollArea className="h-[calc(100vh-12rem)]">
				{notifications.length === 0 ? (
					<div className="p-4 text-center text-muted-foreground">No notifications yet</div>
				) : (
					notifications.map((notification) => (
						<div
							key={notification.id}
							className={`flex items-start gap-4 p-4 border-b hover:bg-muted/25 transition-colors ${
								!notification.read ? 'bg-muted/50' : ''
							}`}
						>
							<Avatar className="mt-1">
								<AvatarImage src={notification.creator.image ?? '/avatar.png'} />
							</Avatar>
							<div className="flex-1 space-y-1">
								<div className="flex items-center gap-2">
									{NotificationIcon(notification.type)}
									<span>
										<span className="font-medium">
											{notification.creator.name ?? notification.creator.username}
										</span>{' '}
										{notification.type === 'FOLLOW'
											? 'started following you'
											: notification.type === 'LIKE'
												? 'liked your post'
												: 'commented on your post'}
									</span>
								</div>

								{notification.post && (notification.type === 'LIKE' || notification.type === 'COMMENT') && (
									<div className="pl-6 space-y-2">
										<div className="text-sm text-muted-foreground rounded-md p-2 bg-muted/30 mt-2">
											<p>{notification.post.content}</p>
											{notification.post.image && (
												<img
													src={notification.post.image}
													alt="Post content"
													className="mt-2 rounded-md w-full max-w-[200px] h-auto object-cover"
												/>
											)}
										</div>

										{notification.type === 'COMMENT' && notification.comment && (
											<div className="text-sm p-2 bg-accent/50 rounded-md">
												{notification.comment.content}
											</div>
										)}
									</div>
								)}

								<p className="text-sm text-muted-foreground pl-6">
									{formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
								</p>
							</div>
						</div>
					))
				)}
			</ScrollArea>
		</CardContent>
	);
}

export default NotificationCardContent;
