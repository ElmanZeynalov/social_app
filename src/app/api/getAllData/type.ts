export interface Author {
	id: string;
	username: string;
	image?: string;
}

export interface Post {
	id: string;
	content?: string;
	image?: string;
	createdAt: string;
	updatedAt: string;
	author: Author;
	_count: {
		likes: number;
		comments: number;
	};
}

export interface Comment {
	id: string;
	content: string;
	author: Author;
	postId: string;
	createdAt: string;
}

export interface Like {
	id: string;
	postId: string;
	userId: string;
	createdAt: string;
}

export interface Notification {
	id: string;
	userId: string;
	creator: Author;
	type: 'LIKE' | 'COMMENT' | 'FOLLOW';
	read: boolean;
	createdAt: string;
}
