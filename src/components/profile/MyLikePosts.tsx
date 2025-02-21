import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileTextIcon, HeartIcon } from 'lucide-react';
import PostCard from '@/components/posts/PostCard';

function MyLikePosts({ user, posts, likedPosts }: { user: any; posts: any[]; likedPosts: any[] }) {
	return (
		<Tabs defaultValue="posts" className="w-full">
			<TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
				<TabsTrigger
					value="posts"
					className="flex items-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary
               data-[state=active]:bg-transparent px-6 font-semibold"
				>
					<FileTextIcon className="size-4" />
					Posts
				</TabsTrigger>
				<TabsTrigger
					value="likes"
					className="flex items-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary
               data-[state=active]:bg-transparent px-6 font-semibold"
				>
					<HeartIcon className="size-4" />
					Likes
				</TabsTrigger>
			</TabsList>

			<TabsContent value="posts" className="mt-6">
				<div className="space-y-6">
					{posts.length > 0 ? (
						posts.map((post) => <PostCard key={post.id} post={post} dbUserId={user.id} />)
					) : (
						<div className="text-center py-8 text-muted-foreground">No posts yet</div>
					)}
				</div>
			</TabsContent>

			<TabsContent value="likes" className="mt-6">
				<div className="space-y-6">
					{likedPosts.length > 0 ? (
						likedPosts.map((post) => <PostCard key={post.id} post={post} dbUserId={user.id} />)
					) : (
						<div className="text-center py-8 text-muted-foreground">No liked posts to show</div>
					)}
				</div>
			</TabsContent>
		</Tabs>
	);
}

export default MyLikePosts;
