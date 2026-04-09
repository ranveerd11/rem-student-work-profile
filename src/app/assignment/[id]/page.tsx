import { assignments } from "@/lib/assignments";
import { notFound } from "next/navigation";
import { PDFViewer } from "@/components/PDFViewer";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const assignment = assignments.find(a => a.id === id);
  if (!assignment) return { title: "Not Found" };
  return {
    title: `${assignment.title} | REM Portfolio`,
    description: assignment.description,
  };
}

export default async function AssignmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const assignment = assignments.find(a => a.id === id);

  if (!assignment || assignment.type !== 'pdf') {
    notFound();
  }

  return (
    <PDFViewer 
      url={assignment.url} 
      title={assignment.title} 
      description={assignment.description} 
    />
  );
}
