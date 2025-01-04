import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<div>
			<SignedOut>
				<SignInButton mode={'modal'}>
					<button className="bg-red-400">sing</button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	);
}
