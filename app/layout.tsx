import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Tyler Zaeske - Module Developer',
	description:
		'I am an 18 year old student at the University of Colorado Boulder, studying Computer Science. I also work as a software developer for Osint Industries, a digital investigations company.',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Tyler Zaeske',
	],
	authors: [{ name: 'Tyler Zaeske' }],
	creator: 'Tyler Zaeske',
	openGraph: {
		title: 'Tyler Zaeske - Module Developer',
		description: 'I am an 18 year old student at the University of Colorado Boulder, studying Computer Science. I also work as a software developer for Osint Industries, a digital investigations company.',
		url: 'https://github.com/ByroBuff',
		siteName: 'Tyler Zaeske - Module Developer',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Tyler Zaeske - Module Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar />
				{children}</body>
		</html>
	);
}
