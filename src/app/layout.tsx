import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sideBar/Sidebar';
import QueryClientProviders from '@/providers/QueryClientProviders';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Social App',
	description: 'Social Media App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<QueryClientProviders>
					<div className="min-h-screen">
						<Navbar />
						<main className="py-8">
							<div className="max-w-7xl mx-auto px-4">
								<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
									<div className="hidden lg:block lg:col-span-3">
										<Sidebar />
									</div>
									<div className="lg:col-span-9">{children}</div>
								</div>
							</div>
						</main>
					</div>
				</QueryClientProviders>
			</body>
		</html>
	);
}
