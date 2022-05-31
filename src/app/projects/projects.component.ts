import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: "My portfolio",
      description: "CREATED FOR YOU to show who I am and what I can do.",
      link: "Visit site",
      href: "#",
    },
    {
      title: "English Game",
      description:
        "The game is created in Angular/TypeScript, connected with outside API data.",
      link: "Visit site",
      href: "https://joannakilian.github.io/LearningGame/",
    },
    {
      title: "Dream",
      description: "Difference scroll effect using pure JavaScript.",
      link: "Visit site",
      href: "https://joannakilian.github.io/www-Dream/",
    },
    {
      title: "Animation",
      description: "While exploring the amazing possibilities of CSS.",
      link: "Visit site",
      href: "https://joannakilian.github.io/animation-cubes-3D/",
    },
    {
      title: "Blog",
      description: "Written in English what I learn. Just for a fan.",
      link: "Visit site",
      href: "https://foundbycode.dev/",
    },
    {
      title: "Other",
      description: "All projects are on GitHub",
      link: "Visit site",
      href: "https://github.com/JoannaKilian",
    },
  ];

  ngOnInit(): void {
    console.log(this.projects);
  }
}
