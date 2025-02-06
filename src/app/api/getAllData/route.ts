import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { User, Post, Comment, Like, Notification } from '@prisma/client';

export async function GET() {
	try {
		const users: User[] = await prisma.user.findMany({
			include: {
				posts: {
					include: {
						_count: { select: { likes: true, comments: true } },
						author: { select: { id: true, username: true, image: true } },
					},
				},
				followers: true,
				following: true,
				likes: true,
				notifications: true,
			},
		});

		const posts: Post[] = await prisma.post.findMany({
			include: {
				author: { select: { id: true, username: true, image: true } },
				_count: { select: { likes: true, comments: true } },
			},
		});

		const comments: Comment[] = await prisma.comment.findMany({
			include: {
				author: { select: { id: true, username: true, image: true } },
				post: { select: { id: true } },
			},
		});

		const likes: Like[] = await prisma.like.findMany({
			include: {
				user: { select: { id: true, username: true } },
				post: { select: { id: true } },
			},
		});

		const notifications: Notification[] = await prisma.notification.findMany({
			include: {
				user: { select: { id: true, username: true } },
				creator: { select: { id: true, username: true } },
				post: { select: { id: true } },
				comment: { select: { id: true } },
			},
		});

		return NextResponse.json({ users, posts, comments, likes, notifications });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
	}
}
