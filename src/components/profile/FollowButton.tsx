'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { toggleFollow } from '@/actions/user.action';
import toast from 'react-hot-toast';

function FollowButton({ userId }: { userId: string }) {
	const [isLoading, setIsLoading] = useState(false);

	const handleFollowButton = async () => {
		setIsLoading(true);
		try {
			await toggleFollow(userId);
			toast.success('Following...');
		} catch (error) {
			console.log('Failed to toggle follow button', error);
			toast.error('error following');
		}
	};

	return (
		<Button size="sm" variant="secondary" onClick={handleFollowButton} disabled={isLoading} className="w-20">
			{isLoading ? <Loader2Icon className="w-4 h-4 animate-spin" /> : 'Follow'}
		</Button>
	);
}

export default FollowButton;
