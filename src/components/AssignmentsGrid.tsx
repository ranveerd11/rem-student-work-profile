"use client";

import { assignments } from "@/lib/assignments";
import { AssignmentCard } from "./AssignmentCard";

export function AssignmentsGrid() {
  return (
    <section id="assignments" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Course Assignments</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A chronological collection of projects and papers completed during the Renewable Energy Management course.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => (
            <AssignmentCard 
              key={assignment.id} 
              assignment={assignment} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
