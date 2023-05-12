import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title){
    title.setTitle($localize`Home`);
  }

  ngOnInit(): void {
    const options = {
      strings: [$localize`Create a well-designed portfolio ^7000`, $localize`Online business support and personalization ^10000`],
      typeSpeed: 65,
      loop: true
    };

    // @ts-ignore
    particlesJS.load('hero', './assets/js/particles-config.json', null);

    // @ts-ignore
    new Typed('#hero .message h1', options);

  }

}
