export interface Assignment {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'download';
  url: string;
  date?: string;
}

export const assignments: Assignment[] = [
  {
    id: '1',
    title: 'Assignment 1',
    description: 'Foundational concepts in Renewable Energy Management and global energy transition trends.',
    type: 'pdf',
    url: '/assignments/assignment_1.pdf',
    date: 'January 2026'
  },
  {
    id: '2',
    title: 'Assignment 2',
    description: 'Energy Management and Audit Principles - Part A',
    type: 'pdf',
    url: '/assignments/assignment_2.pdf',
    date: 'February 2026'
  },
  {
    id: '2b',
    title: 'Assignment 2b',
    description: 'Energy Management and Audit Principles - Part B',
    type: 'pdf',
    url: '/assignments/assignment_2b.pdf',
    date: 'February 2026'
  },
  {
    id: '3',
    title: 'Assignment 3: Campus Energy Dashboard',
    description: 'Interactive dashboard for monitoring campus energy consumption and renewable integration.',
    type: 'link',
    url: 'https://campus-energy-dashboard-rho.vercel.app',
    date: 'March 2026'
  },
  {
    id: '4',
    title: 'Assignment 4',
    description: 'Detailed analysis of Solar Photovoltaic Systems and Efficiency.',
    type: 'pdf',
    url: '/assignments/assignment_4.pdf',
    date: 'March 2026'
  },
  {
    id: '5',
    title: 'Assignment 5: Smart Energy Poster',
    description: 'Visual communication of smart grid concepts and future energy scenarios.',
    type: 'link',
    url: 'https://smart-energy-poster.vercel.app',
    date: 'April 2026'
  },
  {
    id: '7',
    title: 'Assignment 7',
    description: 'Comprehensive study on Bio-energy conversion technologies and Waste-to-Energy management.',
    type: 'pdf',
    url: '/assignments/assignment_7.pdf',
    date: 'April 2026'
  },
  {
    id: '8',
    title: 'Assignment 8: Microgrid Research Paper',
    description: 'Research paper on Renewable Energy Microgrid Architecture and Energy Mix optimization.',
    type: 'pdf',
    url: '/assignments/assignment_8.pdf',
    date: 'April 2026'
  },
  {
    id: '9a',
    title: 'Assignment 9: Video Summary Report',
    description: 'Technical summary of Renewable Microgrid Architecture and Energy Storage technical videos.',
    type: 'download',
    url: '/assignments/Assignment9_Summary_Report.docx',
    date: 'April 2026'
  },
  {
    id: '9b',
    title: 'Assignment 9: Microgrid Mind Map',
    description: 'Structural mind map of Microgrid components and operational layers.',
    type: 'pdf',
    url: '/assignments/Assignment9_MindMap.pdf',
    date: 'April 2026'
  },
  {
    id: '9c',
    title: 'Assignment 9: Technical Quiz',
    description: 'A 20-question comprehensive quiz on Microgrids and Energy Storage Systems.',
    type: 'pdf',
    url: '/assignments/Assignment9_Quiz.pdf',
    date: 'April 2026'
  },
  {
    id: '9d',
    title: 'Assignment 9: Flashcards',
    description: 'Flashcards covering key terminology in Renewable Energy Management and Storage.',
    type: 'pdf',
    url: '/assignments/Assignment9_Flashcards.pdf',
    date: 'April 2026'
  },
  {
    id: '10',
    title: 'Assignment 10: REM Work Portfolio',
    description: 'A comprehensive, high-performance web portfolio showcasing all course assignments, built with Next.js 16 and Tailwind CSS v4.',
    type: 'link',
    url: 'https://rem-student-work-profile.vercel.app/',
    date: 'April 2026'
  }
];
