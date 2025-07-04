

import SaturdayMorningPhysicsTalk from './SaturdayMorningPhysicsTalk.jsx'
import ArizonaTalk from './ArizonaTalk.jsx'
import { Navigate } from "react-router-dom";

const talks = [
  {
    id: 'arizona',
    title: 'Two probes of Dark Energy',
    subtitle: 'DES & DESI',
    description: 'TACOS seminar at University of Arizona',
    date: '2025-04-23',
    element: ArizonaTalk,
    background: 'https://i.pinimg.com/736x/ab/a5/cd/aba5cd6843c2a48a34aff3837a7b8ab9.jpg',
  },
  {
    id: 'saturday-morning-physics',
    title: 'Saturday Morning Physics',
    subtitle: 'DESI: Surveying Dark Energy with 5000 Robots',
    description: 'Public talk at the University of Michigan.',
    date: '2025-04-12',
    element: SaturdayMorningPhysicsTalk,
    background: 'https://s.hdnux.com/photos/01/25/62/04/22487305/4/ratio16x9_1920.jpg',
  },
  {
    id: 'fermilab-2024',
    title: 'Dark Energy Spectroscopic Instrument',
    subtitle: 'Cosmology results from Data Release 1',
    description: 'Seminars given at Perimeter Institute and Fermilab.',
    date: '2024-11',
    element: () => {
      window.location.href = 'https://otavioalves.com/talks/pi2024';
      return null;
  },
    background: 'https://wordpress.wbur.org/wp-content/uploads/2019/03/resized.jpg',
  },
  
  ];

export default talks;