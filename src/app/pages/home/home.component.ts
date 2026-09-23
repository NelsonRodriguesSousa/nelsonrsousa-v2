import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  projects: any[] = [
    {
      name: "Gravel Birds",
      link: "gravel-birds",
      img: "/assets/img/projects/gravel-birds/thumb.jpg",
    },
    {
      name: "Soajo Outdoor Fest",
      link: "soajo-outdoor-fest",
      img: "/assets/img/projects/soajo-outdoor-fest/thumb.jpg",
    },
    {
      name: "Heading Soutwhest",
      link: "heading-southwest",
     img: "/assets/img/projects/hsw/thumb.jpg",
    },

     {
      name: "Lapland",
      link: "lapland",
      img: "/assets/img/projects/lapland/thumb.jpg",
    },

      {
      name: "Refúgio do Carrascal",
      link: "refugio-carrascal",
      img: "/assets/img/projects/carrascal/thumb.jpg",
    },

       {
      name: "Café central",
      link: "cafe-central",
      img: "/assets/img/projects/cafe-central/thumb.jpg",
    },

     {
      name: "Autalantis",
      link: "autalantis",
      img: "/assets/img/projects/autalantis/thumb.jpg",
     },

    {
      name: "Weddings",
      link: "weddings",
      img: "/assets/img/projects/weddings/thumb.jpg",
    }
  ]

}
