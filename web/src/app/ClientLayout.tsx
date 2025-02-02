"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isComingSoonPage = router.pathname === "/coming-soon";

  return (
    <>
      {isComingSoonPage ? (
        children
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
      <Analytics />
    </>
  );
}