"use client";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LoadingPage from "@/components/Loading";
import { ReactQueryClientProvider } from "@/constants/react-query-provider";

const MyApp: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <LoadingPage />
  ) : (
    <ReactQueryClientProvider>
      <Navbar />
      <main className="flex-grow flex overflow-hidden">{children}</main>
      <Footer />
    </ReactQueryClientProvider>
  );
};

export default MyApp;
