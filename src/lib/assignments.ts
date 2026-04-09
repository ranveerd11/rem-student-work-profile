export interface Assignment {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'link';
  url: string;
  date?: string;
}

export const assignments: Assignment[] = [
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
    id: '8',
    title: 'Assignment 8: Microgrid Research Paper',
    description: 'Research paper on Renewable Energy Microgrid Architecture and Energy Mix optimization.',
    type: 'pdf',
    url: '/assignments/assignment_8.pdf',
    date: 'April 2026'
  }
];
