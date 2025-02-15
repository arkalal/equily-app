import "./globals.scss";

export const metadata = {
  title:
    "eqly.in - The World's First Talent-Based Social Media for Job Seekers",
  description:
    "Join eqly.in, the revolutionary platform connecting talent with opportunities. Create your profile, get paid for content, and access exclusive job opportunities.",
  keywords:
    "job search, social media, talent platform, career opportunities, professional networking",
  author: "eqly.in",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ff4d4d",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "eqly.in - Talent-Based Social Media for Job Seekers",
    description:
      "Join eqly.in and unlock premium career opportunities. Get noticed by top recruiters and build your professional brand.",
    url: "https://eqly.in",
    siteName: "eqly.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eqly.in - Talent-Based Social Media Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eqly.in - Revolutionizing Job Search",
    description:
      "Join the world's first talent-based social media platform for job seekers.",
    images: ["/twitter-image.jpg"],
    creator: "@eqly",
    site: "@eqly",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
