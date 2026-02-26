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
export function currentProjectInfo() {
  return (

    {
      techstack: [
        'icons8-django-96.png',
        'icons8-git-96.png',
        // 'icons8-postgresql-96.png',
        'icons8-python.svg',
      ],
      flow: 'current_project/chatbot_flow.png',
      architecture: 'current_project/architecture.png',
      name: 'Rag Book Recommendation App',
      description: 'A book recommendation app that uses a retrieval augmented generation (RAG) approach to provide personalized book recommendations based on user preferences and a knowledge base of books.',
      imageSections: [
        {
          className: 'architecture',
          src: 'current_project/architecture.png',
          alt: 'Architecture Diagram',
          title: 'Architecture Diagram'
        },
        {
          className: 'project-flow',
          src: 'current_project/chatbot_flow.png',
          alt: 'Project Flow Diagram',
          title: 'Project Flow Diagram'
        },
        {
          className: 'project-database',
          src: 'current_project/database_schema.png',
          alt: 'Database Schema',
          title: 'Database Schema'
        }

      ]

    }
  )

}
