export interface ProjectInfoInterface {
  name: string;
  description: string;
  techstack: string[];
  architecture: string;
  flow: string;
}
export interface ImageSubSectionInfoInterface {
  className: string;
  src: string;
  alt: string;
  title: string;
}
export interface CurrentProjectRefInterface {
  id: string;
  targetRef: React.RefObject<HTMLDivElement>;
}

export interface ApiItem {
  method: string;
  path: string;
  description: string;
}

export function getApiItems(): ApiItem[] {
  return [
    {
      method: 'GET', path: `/api/book/works/<pk>/`, description: 'Retrieves a book work by its primary key (pk).'
    },
    {
      method: 'GET', path: `/api/book/authors/<pk>/`, description: 'Retrieves an author by their primary key (pk).'
    },
    {
      method: 'GET', path: `/api/search/?q=&page=&limit=`, description: 'Search for books, pagination supported with page and limit parameters'
    },
    {
      method: 'POST', path: `/api/chatbot/single-message/`, description: 'Sends a single message to the chatbot and receives a response.'
    },
    {
      method: 'POST', path: `/api/dj-rest-auth/` , description: 'Endpoint for user authentication, varies with login, logout, password, etc'
    },
    {
      method: 'POST', path: `/api/dj-rest-auth/registration/`, description: 'Endpoint for user registration using Django REST Framework'
    }
  ]
}
interface RoadmapItem {
  label: string;
  status: 'completed' | 'in-progress' | 'planned';
}
export function getRoadmapItems(): RoadmapItem[] {
  return [
    {
      label: 'Design Database Schema', status: 'completed'
    },
    { label: "Implement Django Models", status: 'completed' },
    { label: 'Set Up REST API basics with Django REST Framework', status: 'completed' },
    { label: 'Implement Open Library Search if book or author not found in database', status: 'completed' },
    { label: 'Implement batch search for books with Open Library API', status: 'completed' },
    {
      label: 'Implement User Authentication with JSON Web Tokens', status: 'completed'
    },
    { label: 'View that relays user queries to OpenAI API', status: 'completed' },
    { label: 'V0.1 User Data added to Chatbot Query', status: 'completed' },
    { label: 'V0.2 Similar User Data added to Chatbot Query', status: 'in-progress' },
    { label: 'V0.3 pgvector Integration for RAG Recommendation utilizing vector database', status: 'planned' },
    { label: 'V0.4 Full Open Library data dump version utilizing vector database', status: 'planned' },
    {label: 'React Frontend with React-Bootstrap', status: 'planned'}
  ]
}
export function currentProjectInfo() {
  return (

    {
      techstack: [
        'icons8-django-100.png',
        'icons8-git-96.png',
        // 'icons8-postgresql-96.png',
        'icons8-python.svg',
        'icons8-chatgpt-100.png',
        'icons8-postgresql-96.png',
        'icons8-visual-studio-code-96.png',
      ],
      flow: 'current_project/chatbot_flow.png',
      architecture: 'current_project/architecture.png',
      name: 'Rag Book Recommendation App',
      description: "An app for book lover's to rate books and receive Retrieval Augmented Generation (RAG) recommendations based on their preferences.",
      imageSections: [
        {
          className: 'architecture',
          src: 'current_project/architecture.png',
          alt: 'Architecture Diagram',
          title: 'Architecture Diagram',
          id: 'architecture'
        },
        {
          className: 'project-flow',
          src: 'current_project/chatbot_flow.png',
          alt: 'Project Flow Diagram',
          title: 'Project Flow Diagram',
          id: 'project-flow'
        },
        {
          className: 'project-database',
          src: 'current_project/database_schema.png',
          alt: 'Database Schema',
          title: 'Database Schema',
          id: 'database-schema'
        }

      ]

    }
  )

}
