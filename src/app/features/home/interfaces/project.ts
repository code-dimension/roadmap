export interface Project {
  title: string;
  description: string;
  status: string;
  type: ProjectType;
  link?: string;
}

export enum ProjectType {
  Course = 'course',
  Ebook = 'ebook',
}
