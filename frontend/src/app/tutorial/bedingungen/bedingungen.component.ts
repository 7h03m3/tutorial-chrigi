import { Component } from '@angular/core';

@Component({
  selector: 'app-bedingungen',
  templateUrl: './bedingungen.component.html',
  styleUrls: ['./bedingungen.component.scss'],
})
export class BedingungenComponent {
  public number1: number = 1;
  public number2: number = 2;

  public aufgabe1(): boolean {
    return this.number1 != this.number2;
  }

  public aufgabe2(): boolean {
    return false;
  }

  public aufgabe3(): boolean {
    return false;
  }

  public aufgabe4(): boolean {
    return false;
  }

  public aufgabe5(): boolean {
    return false;
  }

  public aufgabe6(): boolean {
    return false;
  }
}
