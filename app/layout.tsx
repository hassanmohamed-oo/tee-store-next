
import { Metadata } from "next";
import "./globals.css";
import RootProvider from "./RootProvider"; 
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "Tee Store Clothes",
  description: "LET,S EXPLORE UNIQUE CLOTHES.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
      
      <>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="data/png-icon.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </head>
        <RootProvider>
        <html lang="en" className='scroll-smooth'>
          <body className={"relative"}>
            {children}
          </body>
        </html>
        </RootProvider>
      </>
    
  );
}
