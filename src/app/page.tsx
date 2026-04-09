import { Hero } from "@/components/Hero";
import { AssignmentsGrid } from "@/components/AssignmentsGrid";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-hidden">
      <Hero />
      <AssignmentsGrid />
    </main>
  );
}
