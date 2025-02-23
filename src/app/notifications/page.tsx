'use client';
import { NotificationsSkeleton } from '@/components/notifications/NotificationsSkeleton';
import { useNotifications } from '@/feature/notifications/useNotifications';
import NotificationCardHeader from '@/components/notifications/NotificationCardHeader';
import NotificationCardContent from '@/components/notifications/NotificationCardContent';
import { Card } from '@/components/ui/card';

function NotificationsPage() {
	const { isLoading } = useNotifications();
	if (isLoading) return <NotificationsSkeleton />;
	return (
		<div className="space-y-4">
			<Card>
				{/*CARD HEADER*/}
				<NotificationCardHeader />
				{/*CARD CONTENT*/}
				<NotificationCardContent />
			</Card>
		</div>
	);
}
export default NotificationsPage;
