import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with cart, checkout, and admin dashboard',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and drag-drop interface',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://tasks.example.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with 5-day forecast and location search',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://weather.example.com',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop'
  }
];