import { prisma } from '@/lib/prisma';

async function testPrisma() {
	try {
		// Basit bir veritabanı sorgusu (SELECT 1)
		const testConnection = await prisma.$queryRaw`SELECT 1`;
		console.log('Database connection successful:', testConnection);

		// Veritabanındaki örnek tabloyu test et (ör: User tablosu varsa)
		const users = await prisma.user.findMany(); // Replace `user` with your model name
		console.log('User records:', users);

		return 'Prisma test completed successfully.';
	} catch (error) {
		console.error('Error testing Prisma:', error);
		return 'Prisma test failed.';
	}
}
