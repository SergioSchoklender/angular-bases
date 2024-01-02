 import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: [`./hero.component.css`]
})
export class HeroComponent {

  public name: string = 'Spiderman';
  public age: number = 25;

  cambiarNombre(): void {
    this.name = 'ironman';
  }

  cambiarEdad(): void {
    this.age = 45;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  reset(): void {
    this.name = 'Spiderman';
    this.age = 25;
  }

}
