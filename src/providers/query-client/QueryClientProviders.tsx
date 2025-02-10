'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

interface childrenProps {
	children: ReactNode;
}

export default function QueryClientProviders({ children }: childrenProps) {
	const [queryClient] = useState(new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ClerkProvider>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
					<Toaster />
				</ThemeProvider>
			</ClerkProvider>
		</QueryClientProvider>
	);
}
