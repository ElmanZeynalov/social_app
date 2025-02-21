import { useQuery } from '@tanstack/react-query';
import { Author } from '@/app/api/getAllData/type';
import { Like, Post, Comment, Notification, User, Follows } from '@prisma/client';

interface ApiResponse {
	users: Author[];
	posts: Post[];
	comments: Comment[];
	likes: Like[];
	notifications: Notification[];
}

const fetchAllData = async (): Promise<ApiResponse> => {
	const response = await fetch('/api/getAllData');
	if (!response.ok) throw new Error('Failed to fetch data');
	return response.json();
};

export const useAllData = () => {
	return useQuery<ApiResponse, Error>({
		queryKey: ['allData'],
		queryFn: fetchAllData,
	});
};
console.log(fetchAllData());
