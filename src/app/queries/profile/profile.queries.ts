'use client';
import { useQuery } from '@tanstack/react-query';
import { getProfileByUsername } from '@/actions/profile.action';

// const { data: username } = useQuery({
// 	queryKey: ['username', username],
// 	queryFn: () => getProfileByUsername(username),
// });

// export const useUserProfile = (username: string) => {
// 	return useQuery({
// 		queryKey: ['user', username],
// 		queryFn: () => getProfileByUsername(username),
// 	});
// };
