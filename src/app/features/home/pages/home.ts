import { Component } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { ProjectStatus } from '../enums/project-status';
import { Project, ProjectType } from '../interfaces/project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="flex justify-center">
      <div class="flex flex-col gap-6 w-full max-w-[850px]">
        @for (project of projects; track project.title) {
        <app-project-card [project]="project" />
        }
      </div>
    </div>
  `,
})
export class HomePage {
  projects: Project[] = [
    {
      title: 'Curso Testes Automatizados com Angular',
      description:
        'Curso focado em ensinar de forma profunda e prática como implementar testes unitários, testes de integração e testes de e2e com Angular.',
      status: ProjectStatus.Completed,
      type: ProjectType.Course,
    },
    {
      title: 'Ebook Engenharia de Prompts',
      description:
        'Ebook focado em ensinar como criar e utilizar prompts eficientes que tornam os resultados com IA muito mais precisos e relevantes.',
      status: ProjectStatus.Completed,
      type: ProjectType.Ebook,
    },
    {
      title: 'Curso Angular Moderno',
      description:
        'Curso focado em ensinar Angular 20+ de forma didática e prática, assim como todas os padrões e melhores práticas que envolvem Angular.',
      status: ProjectStatus.InProgress,
      type: ProjectType.Course,
    },
    {
      title: 'Curso Formulários com Angular',
      description:
        'Curso focado em ensinar como criar formulários inteligentes com Angular, focando principalmente em Reactive Forms e todos os seus recursos. No curso haverá uma atualização para incluir Signal Forms também, assim que o recurso estiver estável.',
      status: ProjectStatus.Planning,
      type: ProjectType.Course,
    },
    {
      title: 'Curso Signal Forms com Angular',
      description:
        'Curso focado em ensinar como utilizar a nova forma de escrever formulários baseados em Signals, conhecida como Signal Forms.',
      status: ProjectStatus.Planning,
      type: ProjectType.Course,
    },
    {
      title: 'Curso Desenvolvimento com IA',
      description:
        'Curso focado em ensinar como usar IA para desenvolver aplicações Angular utilizando técnicas como Prompt Engineering e Context Engineering.',
      status: ProjectStatus.Planning,
      type: ProjectType.Course,
    },
    {
      title: 'Curso Monorepos com Nx',
      description:
        'Curso focado em ensinar o que é Nx e como criar monorepositórios com Nx para desenvolvimento de aplicações Angular de grande escala.',
      status: ProjectStatus.Planning,
      type: ProjectType.Course,
    },
    {
      title: 'Curso Micro Front-End com Angular',
      description:
        'Curso focado em ensinar como utilizar o Angular para construir diferentes tipos de arquiteturas Micro Front-Ends.',
      status: ProjectStatus.Planning,
      type: ProjectType.Course,
    },
  ];
}
