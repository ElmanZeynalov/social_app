import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { useNotifications } from '@/feature/notifications/useNotifications';

function NotificationCardHeader() {
	const { notifications } = useNotifications();
	return (
		<CardHeader className="border-b">
			<div className="flex items-center justify-between">
				<CardTitle>Notifications</CardTitle>
				<span className="text-sm text-muted-foreground">
					{notifications.filter((n) => !n.read).length} unread
				</span>
			</div>
		</CardHeader>
	);
}

export default NotificationCardHeader;
