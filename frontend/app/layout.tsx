import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r1avrpdi0c");
              
              // Initialize Clarity
              window.clarity && window.clarity('start', 'r1avrpdi0c');
            `,
          }}
        />
      </head>
      <body> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}