import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  greeting = {
    username: "Nguyen Tran Gia Kiet",
    title: "Hi all, I'm Gia Kiet",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angularjs / Nodejs and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/196LU-zPNBuoqLl378qkdzd8ftg2meGHi/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}