"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Download, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PDFViewer({ url, title, description }: { url: string, title: string, description?: string }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Viewer Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/#assignments">
              <Button variant="ghost" size="icon-sm" className="rounded-full">
                <ChevronLeft size={20} />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-bold truncate max-w-[200px] md:max-w-md">{title}</h1>
              {description && <p className="text-xs text-muted-foreground truncate max-w-[200px] md:max-w-md">{description}</p>}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <a href={url} download target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="gap-2 hidden sm:flex">
                <Download size={16} />
                Download
              </Button>
              <Button size="icon-sm" variant="outline" className="sm:hidden">
                <Download size={16} />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Viewer Content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-[calc(100vh-12rem)] min-h-[600px] bg-muted rounded-xl shadow-inner relative overflow-hidden group"
        >
          {/* Simple object embed for PDF */}
          <object
            data={url}
            type="application/pdf"
            className="w-full h-full border-0"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center mb-4">
                <FileText size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">PDF Preview Unavailable</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Your browser might not support direct PDF embedding or the file is too large.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" className="gap-2">
                    <ExternalLink size={16} />
                    Open in New Tab
                  </Button>
                </a>
                <a href={url} download>
                  <Button variant="outline" className="gap-2">
                    <Download size={16} />
                    Download File
                  </Button>
                </a>
              </div>
            </div>
          </object>
        </motion.div>
      </main>
    </div>
  );
}
