import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [ HeroService ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
  }

  getHeroes() {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }
}

