"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-background z-[-1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full z-[-1] opacity-50 pointer-events-none" />

      <div className="container px-4 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Renewable Energy Management</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
            Ranveer Deshmukh
          </h1>
          <p className="text-lg md:text-xl font-mono text-muted-foreground mb-8">Roll No: 22108A0061</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10"
        >
          Showcasing a comprehensive portfolio of assignments and research in sustainable energy solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#assignments" className="w-full sm:w-auto">
            <Button size="lg" className="rounded-full px-8 text-md h-14 w-full">
              View Assignments
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
