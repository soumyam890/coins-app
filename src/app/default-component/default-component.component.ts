import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default-component.component.html',
  styleUrls: ['./default-component.component.scss']
})
export class DefaultComponentComponent implements OnInit {
  public title: string = 'Coin App';
  constructor() { }

  ngOnInit(): void {
  }

}
