export interface Project {
  title: string;
  description: string;
  status: string;
  type: ProjectType;
}

export enum ProjectType {
  Course = 'course',
  Ebook = 'ebook',
}