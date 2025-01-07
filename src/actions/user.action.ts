'use server';
import { prisma } from '@/lib/prisma';
import { auth, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function syncUser() {
	try {
		const { userId } = await auth();
		const user = await currentUser();
		if (!user) return;

		const existingUser = await prisma.user.findUnique({
			where: {
				clerkId: userId,
			},
		});
		if (existingUser) {
			return existingUser;
		}

		const dbUser = await prisma.user.create({
			data: {
				clerkId: userId,
				name: `${user.firstName || ' '} ${user.lastName || ' '}`,
				username: user.username ?? user.emailAddresses[0].emailAddress.split('@')[0],
				email: user.emailAddresses[0].emailAddress,
				image: user.imageUrl,
			},
		});
		return dbUser;
	} catch (error) {
		console.error(error, 'syncuser');
	}
}