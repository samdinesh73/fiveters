import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import TargetCursor from "../components/TargetCursor";
import ClickSpark from "../components/ClickSpark";
import CursorRibbons from "../components/CursorRibbons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fiveters Media | Premier Digital Marketing, Web & Software Agency",
  description: "Fiveters Media is a premier digital marketing agency specializing in high-performance paid ads, conversion rate optimization (CRO), search engine optimization (SEO), custom website development, and scalable SaaS software architecture.",
  keywords: [
    "digital marketing agency",
    "website development",
    "software development",
    "paid advertising funnels",
    "search engine optimization",
    "conversion rate optimization",
    "SaaS app design",
    "email marketing flows",
    "fiveters media",
    "fivetersmedia"
  ],
  authors: [{ name: "Fiveters Media Team" }],
  creator: "Fiveters Media",
  publisher: "Fiveters Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fiveters Media | Premier Digital Marketing, Web & Software Agency",
    description: "Fiveters Media scales brands with high-performance paid advertising, SEO, conversion-focused website design, and scalable custom software engineering.",
    url: "https://fivetersmedia.com",
    siteName: "Fiveters Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiveters Media | Premier Digital Marketing, Web & Software Agency",
    description: "Scale your revenue with premier search marketing, custom websites, and performance marketing funnels.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fivetersmedia.com/#organization",
      "name": "Fiveters Media",
      "url": "https://fivetersmedia.com",
      "logo": "https://fivetersmedia.com/logo.png",
      "sameAs": [
        "https://instagram.com",
        "https://linkedin.com",
        "https://youtube.com"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6382118130",
        "contactType": "sales",
        "email": "hola@fivetersmedia.com"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://fivetersmedia.com/#website",
      "url": "https://fivetersmedia.com",
      "name": "Fiveters Media",
      "publisher": {
        "@id": "https://fivetersmedia.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Cinematic Digital Marketing & Web Development Services",
      "provider": {
        "@id": "https://fivetersmedia.com/#organization"
      },
      "serviceType": "Digital Marketing, SEO, Web Design, Paid Ads",
      "areaServed": "Worldwide"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <TargetCursor
          targetSelector="a,button,footer a, footer button, header a, header button, header .header-logo"
          spinDuration={2.5}
          hideDefaultCursor={true}
          cursorColor="rgba(255, 255, 255, 0.85)"
          cursorColorOnTarget="#9a0002"
        />
        <SmoothScroll />
        <CursorRibbons />
        <ClickSpark
          sparkColor="#9a0002"
          sparkSize={12}
          sparkRadius={25}
          sparkCount={15}
          duration={500}
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
