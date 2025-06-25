import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const coolvetica = localFont({
  src: "./fonts/CoolveticaRg.otf",
  weight: "400",
  variable: "--font-coolvetica",
});

export const metadata = {
  title: "The DevRel Camp",
  description: "The DevRel Camp is a community of developers who are passionate about building and sharing knowledge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/meadow.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coolvetica.variable} antialiased bg-black`}
      >
      <div className="fixed bg-[url('/meadow.jpg')] bg-cover bg-center bg-no-repeat min-h-screen h-screen w-full inset-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60"></div>
        {children}
      </body>
    </html>
  );
}
