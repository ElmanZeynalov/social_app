import React, { useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { DeleteAlertDialog } from '@/feature/post/DeleteAlertDialog';
import { deletePost, getPosts } from '@/actions/post.action';
import toast from 'react-hot-toast';

type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];

function PostHeaderTextContent({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDeletePost = async () => {
		if (isDeleting) return;
		try {
			setIsDeleting(true);
			const result = await deletePost(post.id);
			if (result.success) toast.success('Post deleted successfully');
			else throw new Error(result.error);
		} catch (error) {
			toast.error('Failed to delete post');
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<div className="flex-1 min-w-0">
			<div className="flex items-start justify-between">
				<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 truncate">
					<Link href={`/profile/${post.author.username}`} className="font-semibold truncate">
						{post.author.name}
					</Link>
					<div className="flex items-center space-x-2 text-sm text-muted-foreground">
						<Link href={`/profile/${post.author.username}`}>@{post.author.username}</Link>
						<span>•</span>
						<span>{formatDistanceToNow(new Date(post.createdAt))} ago</span>
					</div>
				</div>
				{/* Check if current user is the post author */}
				{dbUserId === post.author.id && (
					<DeleteAlertDialog isDeleting={isDeleting} onDelete={handleDeletePost} />
				)}
			</div>
			<p className="mt-2 text-sm text-foreground break-words">{post.content}</p>
		</div>
	);
}

export default PostHeaderTextContent;
