import React from 'react';
import { CalendarIcon, LinkIcon, MapPinIcon } from 'lucide-react';
import { format } from 'date-fns';

function LocationWebsite({ user }: any) {
	const formattedDate = format(new Date(user.createdAt), 'MMMM yyyy');

	return (
		<div className="w-full mt-6 space-y-2 text-sm">
			{user.location && (
				<div className="flex items-center text-muted-foreground">
					<MapPinIcon className="size-4 mr-2" />
					{user.location}
				</div>
			)}
			{user.website && (
				<div className="flex items-center text-muted-foreground">
					<LinkIcon className="size-4 mr-2" />
					<a
						href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
						className="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{user.website}
					</a>
				</div>
			)}
			<div className="flex items-center text-muted-foreground">
				<CalendarIcon className="size-4 mr-2" />
				Joined {formattedDate}
			</div>
		</div>
	);
}

export default LocationWebsite;
