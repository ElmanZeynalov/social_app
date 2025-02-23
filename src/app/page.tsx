import { currentUser } from '@clerk/nextjs/server';
import CreatPost from '@/components/posts/CreatPost';
import WhoToFollow from '@/components/sideBar/WhoToFollow';
import { getPosts } from '@/actions/post.action';
import PostCard from '@/components/posts/PostCard';
import { getDbUserId } from '@/actions/user.action';
export default async function Home() {
	const user = await currentUser();
	const posts = await getPosts();
	const dbUserId = await getDbUserId();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
			<div className="lg:col-span-6">
				{user ? <CreatPost /> : null}
				<div className="space-y-6">
					{posts.map((post) => (
						<PostCard key={post.id} post={post} dbUserId={dbUserId} />
					))}
				</div>
			</div>
			<div className=" hidden lg:block lg:col-span-4 sticky top-20">
				<WhoToFollow />
			</div>
		</div>
	);
}
