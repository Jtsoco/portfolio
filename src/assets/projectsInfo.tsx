export interface ProjectCard {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  githubLink: string;
  features: string[];
  status: 'completed' | 'in-progress' | 'archived';
  backendUrl?: string;
  frontendUrl?: string;
  roadmap?: RoadmapItem[];
  images?: ProjectImage[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
}

interface RoadmapItem {
  label: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export function getProjects(): ProjectCard[] {
  return [
    {
      id: 'kotoback',
      title: 'KotoBack',
      shortDescription: 'EPUB to flashcard backend service',
      description: 'A backend service that processes EPUB files and generates flashcard lists for studying. Built with Django, Celery, and Redis for asynchronous task processing. V1 focuses on core backend architecture and API, with frontend coming soon.',
      techStack: [
        'icons8-django-100.png',
        'icons8-python.svg',
        'icons8-postgresql-96.png',
        'icons8-redis-96.png',
        'icons8-git-96.png',
      ],
      githubLink: 'https://github.com/jtsoco/Kotoback',
      features: [
        'EPUB file parsing and extraction',
        'Async task processing with Celery',
        'Redis for Celery broker',
        'RESTful API with Django REST Framework',
        'User authentication',
        'Flashcard generation and storage',
      ],
      status: 'in-progress',
      roadmap: [
        {
          label: 'EPUB parsing and text extraction',
          status: 'completed',
        },
        {
          label: 'Celery task queue setup',
          status: 'completed',
        },
        {
          label: 'Redis caching implementation',
          status: 'completed',
        },
        {
          label: 'Django REST API endpoints',
          status: 'completed',
        },
        {
          label: 'User authentication and authorization',
          status: 'completed',
        },
        {
          label: 'Frontend React application',
          status: 'planned',
        },

      ],
    },
  ];
}
