'use client';
import React, { useState } from 'react';
import { SignInButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { EditIcon } from 'lucide-react';
import { toggleFollow } from '@/actions/user.action';
import toast from 'react-hot-toast';
import { getProfileByUsername, getUserPosts } from '@/actions/profile.action';
import EditProfileDialog from './EditProfileDialog';

type User = Awaited<ReturnType<typeof getProfileByUsername>>;
type Posts = Awaited<ReturnType<typeof getUserPosts>>;

interface EditProfileButtonProps {
	user: NonNullable<User>;
	isFollowing: boolean;
	currentUser: NonNullable<ReturnType<typeof getProfileByUsername>>;
	posts: Posts;
	likedPosts: Posts;
}

function EditProfileButton({
	isFollowing: initialIsFollowing,

	user,
}: EditProfileButtonProps) {
	const [isUpdatingFollow, setIsUpdatingFollow] = useState(false);
	const [showEditDialog, setShowEditDialog] = useState(false);
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	const handleFollow = async () => {
		if (!currentUser) return;

		try {
			setIsUpdatingFollow(true);
			await toggleFollow(user.id);
			setIsFollowing(!isFollowing);
		} catch (error) {
			toast.error('Failed to update follow status');
		} finally {
			setIsUpdatingFollow(false);
		}
	};

	const { user: currentUser } = useUser();
	const isOwnProfile = currentUser?.username === user.username;

	return (
		<div>
			{!currentUser ? (
				<SignInButton mode="modal">
					<Button className="w-full mt-4">Follow</Button>
				</SignInButton>
			) : isOwnProfile ? (
				<Button className="w-full mt-4" onClick={() => setShowEditDialog(true)}>
					<EditIcon className="size-4 mr-2" />
					Edit Profile
				</Button>
			) : (
				<Button
					className="w-full mt-4"
					onClick={handleFollow}
					disabled={isUpdatingFollow}
					variant={isFollowing ? 'outline' : 'default'}
				>
					{isFollowing ? 'Unfollow' : 'Follow'}
				</Button>
			)}
			<EditProfileDialog showEditDialog={showEditDialog} setShowEditDialog={setShowEditDialog} user={user} />
		</div>
	);
}

export default EditProfileButton;
