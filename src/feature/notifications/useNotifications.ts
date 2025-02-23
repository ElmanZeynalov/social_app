'use client';
import { useEffect, useState } from 'react';
import { Notification } from '@/types/notifications/notifications.type';
import { getNotifications, markNotificationsAsRead } from '@/actions/notification.action';
import toast from 'react-hot-toast';

export function useNotifications(): { notifications: Notification[]; isLoading: boolean } {
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNotifications = async () => {
			setIsLoading(true);
			try {
				const data = await getNotifications();
				setNotifications(data);

				const unreadIds = data.filter((n) => !n.read).map((n) => n.id);
				if (unreadIds.length > 0) await markNotificationsAsRead(unreadIds);
			} catch (error) {
				toast.error('Failed to fetch notifications');
			} finally {
				setIsLoading(false);
			}
		};

		fetchNotifications();
	}, []);

	return { notifications, isLoading };
}
