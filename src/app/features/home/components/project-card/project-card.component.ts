import { Component, computed, input, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Project, ProjectType } from '../../interfaces/project';
import { ProjectStatus } from '../../enums/project-status';

const statusClassMap = {
  [ProjectStatus.Planning]: 'badge badge-outline badge-info',
  [ProjectStatus.InProgress]: 'badge badge-primary',
  [ProjectStatus.Completed]: 'badge badge-success',
};

const statusLabelMap = {
  [ProjectStatus.Planning]: 'Em planejamento',
  [ProjectStatus.InProgress]: 'Em desenvolvimento',
  [ProjectStatus.Completed]: 'Concluído',
};

const typeLabelMap = {
  [ProjectType.Course]: 'Curso',
  [ProjectType.Ebook]: 'Ebook',
};

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div
        class="mb-2 px-3 py-1 rounded-full text-sm font-medium max-w-fit border"
      >
        {{ typeLabel() }}
      </div>

      <h3 class="text-xl font-bold mb-2 text-white">{{ project().title }}</h3>
      <p class="text-gray-300 mb-4">{{ project().description }}</p>

      <div
        class="mb-2"
        [ngClass]="statusClass()"
      >
        {{ statusLabel() }}
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
})
export class ProjectCardComponent {
  project = input.required<Project>();

  statusClass = computed(() => {
    return statusClassMap[this.project().status];
  });

  statusLabel = computed(() => {
    return statusLabelMap[this.project().status];
  });

  typeLabel = computed(() => {
    return typeLabelMap[this.project().type];
  });
}
