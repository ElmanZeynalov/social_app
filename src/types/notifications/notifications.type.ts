import { getNotifications } from '@/actions/notification.action';

type Notifications = Awaited<ReturnType<typeof getNotifications>>;
export type Notification = Notifications[number];
