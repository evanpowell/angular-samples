import { Component, OnInit } from '@angular/core';
import { Nametag, Color } from './template-form.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  public nametag: Nametag;
  public colors: Color[];

  constructor() { }

  ngOnInit() {
    this.setDefaultProperties();
  }

  private setDefaultProperties(): void {
    this.nametag = new Nametag();
    this.colors = [
      {
        name: 'purple',
        hexCode: '#6f42c1'
      },
      {
        name: 'blue',
        hexCode: '#007bff'
      },
      {
        name: 'red',
        hexCode: '#dc3545'
      },
      {
        name: 'green',
        hexCode: '#28a745'
      },
      {
        name: 'yellow',
        hexCode: '#ffc107'
      },
      {
        name: 'orange',
        hexCode: '#fd7e14'
      },
    ];
  }

}
