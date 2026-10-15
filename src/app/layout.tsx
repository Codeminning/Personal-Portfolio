import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dhyanesh-visakan.dev'),
  title: 'Dhyanesh Visakan | Software Developer & AI/ML Enthusiast',
  description:
    "Explore Dhyanesh Visakan's portfolio featuring software development, AI/ML projects, computer vision, and full-stack engineering.",
  keywords: [
    'Dhyanesh Visakan',
    'SRMIST',
    'SRM Institute of Science and Technology',
    'Computer Science Engineering',
    'Full-Stack Developer',
    'AI / ML Enthusiast',
    'Computer Vision',
    'YOLOv8',
    'Pothole Detection',
    'RAG Chatbot',
    'EduTime Pro',
    'Next.js',
    'FastAPI',
    'React',
    'Portfolio'
  ],
  authors: [{ name: 'Dhyanesh Visakan' }],
  creator: 'Dhyanesh Visakan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhyanesh-visakan.dev',
    title: 'Dhyanesh Visakan | Software Developer & AI/ML Enthusiast',
    description:
      "Explore Dhyanesh Visakan's portfolio featuring software development, AI/ML projects, computer vision, and full-stack engineering.",
    siteName: "Dhyanesh Visakan Portfolio",
    images: [
      {
        url: '/images/avatar.svg',
        width: 800,
        height: 800,
        alt: 'Dhyanesh Visakan — Computer Science Engineering Student & Full-Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhyanesh Visakan | Software Developer & AI/ML Enthusiast',
    description:
      "Explore Dhyanesh Visakan's portfolio featuring software development, AI/ML projects, computer vision, and full-stack engineering.",
    images: ['/images/avatar.svg']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: '#060911',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('dhyanesh_theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#060911] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
