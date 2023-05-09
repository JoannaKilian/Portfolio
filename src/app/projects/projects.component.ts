import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Animation',
      description: 'While exploring the amazing possibilities of CSS.',
      link: 'Visit site',
      href: 'https://joannakilian.github.io/animation-cubes-3D/',
    },
    {
      title: 'Dream',
      description: 'Difference scroll effect using JavaScript.',
      link: 'Visit site',
      href: 'https://joannakilian.github.io/www-Dream/',
    },
    {
      title: 'English Game',
      description:
        'The game is created in Angular/TypeScript, connected with outside API data.',
      link: 'Visit site',
      href: 'https://joannakilian.github.io/LearningGame/',
    },
    {
      title: 'Hangman',
      description: 'Game in Java Script',
      link: 'Visit site',
      href: 'https://joannakilian.github.io/game-Hangman/',
    },
    {
      title: 'My portfolio',
      description: 'CREATED FOR YOU to show who I am and what I can do.',
      link: 'Visit site',
      href: '#',
    },
    {
      title: 'Present work on dashboard',
      description: 'Using knowledge from working with Angular',
      link: 'Code',
      href: 'https://github.com/JoannaKilian/dashboard',
    },
  ];

  ngOnInit(): void {
    console.log(this.projects);
  }
}
