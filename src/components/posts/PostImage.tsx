import React from 'react';
import { getPosts } from '@/actions/post.action';

// type Posts = Awaited<ReturnType<typeof getPosts>>;
// type Post = Posts[number];
//
// interface PostImageProps {
// 	image: React.JSX.Element;
// 	post?: Post;
// }

async function PostImage() {
	// const post = await getPosts();

	return (
		<>
			{post.image && (
				<div className="rounded-lg overflow-hidden">
					<img src={post.image} alt="Post content" className="w-full h-auto object-cover" />
				</div>
			)}
		</>
	);
}

export default PostImage;
