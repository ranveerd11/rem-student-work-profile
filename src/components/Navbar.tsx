"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          REM PORTFOLIO
        </Link>
        <nav className="hidden md:flex gap-8 items-center justify-center">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="#assignments" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Assignments</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-muted-foreground hidden sm:block">22108A0061</span>
        </div>
      </div>
    </motion.header>
  );
}
