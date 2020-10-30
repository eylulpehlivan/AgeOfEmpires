import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import units from '../../_files/units.json';



@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],

})

export class UnitsComponent implements OnInit {
  title = 'json-file-read-angular';
  public results: any; // Change it private to public
  public mymessage: any;
  public units: {}[] = units;


  constructor() { }

  ngOnInit(): void {
  }


}
