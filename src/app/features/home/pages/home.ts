import { Component, computed, signal } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { Project } from '../interfaces/project';
import { SearchComponent } from '../components/search/search.component';
import { projects } from '../data/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCardComponent, SearchComponent],
  template: `
    <div class="flex justify-center lg:justify-start">
      <app-search [(search)]="search" />
    </div>

    <div class="flex justify-center">
      <div class="flex flex-col gap-6 w-full">
        @for (project of resolvedProjects(); track project.title) {
          <app-project-card [project]="project" />
        } @empty {
          <div class="mt-8  w-full p-8 text-center rounded-lg shadow-lg">
            Nenhum projeto encontrado
          </div>
        }
      </div>
    </div>
  `,
})
export class HomePage {
  search = signal('');

  resolvedProjects = computed(() => {
    if (this.search()) {
      return this.searchForProject(projects, this.search());
    }

    return projects;
  });

  private searchForProject(projects: Project[], search: string) {
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()),
    );
  }
}
