"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Calendar, Download } from "lucide-react";
import Link from "next/link";
import { Assignment } from "@/lib/assignments";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AssignmentCard({ assignment, index }: { assignment: Assignment, index: number }) {
  const isPDF = assignment.type === 'pdf';
  const isDownload = assignment.type === 'download';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all border-primary/10 hover:border-primary/30">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className={`p-2 rounded-lg ${
              isPDF ? 'bg-blue-500/10 text-blue-600' : 
              isDownload ? 'bg-orange-500/10 text-orange-600' : 
              'bg-green-500/10 text-green-600'
            }`}>
              {isPDF ? <FileText size={20} /> : 
               isDownload ? <Download size={20} /> : 
               <ExternalLink size={20} />}
            </div>
            {assignment.date && (
              <div className="flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                <Calendar size={12} className="mr-1" />
                {assignment.date}
              </div>
            )}
          </div>
          <CardTitle className="text-xl">{assignment.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {assignment.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {/* Add thumbnail placeholder or extra info if needed */}
        </CardContent>
        <CardFooter className="pt-0">
          {isPDF ? (
            <Link href={`/assignment/${assignment.id}`} className="w-full">
              <Button variant="outline" className="w-full justify-between group">
                View Document
                <FileText size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : isDownload ? (
            <a href={assignment.url} download className="w-full">
              <Button variant="outline" className="w-full justify-between group">
                Download File
                <Download size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          ) : (
            <a href={assignment.url} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="default" className="w-full justify-between group">
                Open Project
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
