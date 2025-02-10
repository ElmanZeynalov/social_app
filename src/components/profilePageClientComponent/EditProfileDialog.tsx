'use client';
import React, { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { getProfileByUsername, updateProfile } from '@/actions/profile.action';
import toast from 'react-hot-toast';

type User = Awaited<ReturnType<typeof getProfileByUsername>>;

interface EditProfileDialogProps {
	showEditDialog: boolean;
	setShowEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
	user: NonNullable<User>;
}

function EditProfileDialog({ showEditDialog, setShowEditDialog, user }: EditProfileDialogProps) {
	const [editForm, setEditForm] = useState({
		name: user.name || '',
		bio: user.bio || '',
		location: user.location || '',
		website: user.website || '',
	});

	const handleEditSubmit = async () => {
		const formData = new FormData();
		Object.entries(editForm).forEach(([key, value]) => {
			formData.append(key, value);
		});

		const result = await updateProfile(formData);
		if (result.success) {
			setShowEditDialog(false);
			toast.success('Profile updated successfully');
		}
		setShowEditDialog(false);
	};

	return (
		<Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Edit Profile</DialogTitle>
				</DialogHeader>
				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<Label>Name</Label>
						<Input
							name="name"
							value={editForm.name}
							onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
							placeholder="Your name"
						/>
					</div>
					<div className="space-y-2">
						<Label>Bio</Label>
						<Textarea
							name="bio"
							value={editForm.bio}
							onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
							className="min-h-[100px]"
							placeholder="Tell us about yourself"
						/>
					</div>
					<div className="space-y-2">
						<Label>Location</Label>
						<Input
							name="location"
							value={editForm.location}
							onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
							placeholder="Where are you based?"
						/>
					</div>
					<div className="space-y-2">
						<Label>Website</Label>
						<Input
							name="website"
							value={editForm.website}
							onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
							placeholder="Your personal website"
						/>
					</div>
				</div>
				<div className="flex justify-end gap-3">
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button onClick={handleEditSubmit}>Save Changes</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default EditProfileDialog;
