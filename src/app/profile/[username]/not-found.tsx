import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function notFound() {
	return (
		<div className="">
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Button variant="default" asChild>
				<Link href="/">Return Home</Link>
			</Button>
		</div>
	);
}
