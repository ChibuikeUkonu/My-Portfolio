"use client";
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading && (
          <div className="loader-wrapper">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        {!loading && children}
      </body>
    </html>
  );
}