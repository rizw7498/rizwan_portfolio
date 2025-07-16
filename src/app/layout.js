import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";



export const metadata = {
  title: "Rizwan | Full Stack Developer Portfolio",
  description: "Explore Rizwan's professional portfolio featuring MERN stack projects, internships, and real-world experience in modern web development.",
  keywords: ["Rizwan", "MERN Developer", "Portfolio", "React", "Next.js", "MongoDB", "Full Stack Developer", "Web Development"],
  authors: [{ name: "Rizwan Ali" }],
  creator: "Rizwan Ali",
  openGraph: {
    title: "Rizwan | Full Stack Developer Portfolio",
    description: "Explore Rizwan's MERN stack projects and development experience.",
    siteName: "Rizwan Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // ✅ Replace with the correct image URL
        width: 1200,
        height: 630,
        alt: "Rizwan Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={``}
      >
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
