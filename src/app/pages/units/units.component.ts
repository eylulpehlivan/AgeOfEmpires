import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import units from '../../_files/units.json';
declare var jQuery: any;

import { CharacterService } from 'src/app/_services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/state';
import { Save, Update } from 'src/app/_state/character.actions';




@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],

})

export class UnitsComponent implements OnInit {
  //title = 'json-file-read-angular';
  // public results: any; // Change it private to public
  // public mymessage: any;
  // public units: {}[] = units;

  units = [];
  goldFilter = false;
  foodFilter = false;
  woodFilter = false;
  

  constructor(
    private _service: CharacterService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {

    this._service.getAllCharacter();
    this.subscribeState();
    this.save();
   


  }
  save() {
    this.store.dispatch(new Save());
  }

  getByCostWoodFilter(item) {
    let test = {type : "Wood", value : item};
    this.store.dispatch(new Update(test));
  }
  getByCostFoodFilter(item) {
    let test = {type : "Food", value : item};
    this.store.dispatch(new Update(test));
  }
  getByCostGoldFilter(item) {
    let test = {type : "Gold", value : item};
    this.store.dispatch(new Update(test));
  }
  

  getByAgeFilter(age: string) {
  
    let test = {type : "age", value : age};
    this.store.dispatch(new Update(test));
  }

  subscribeState() {
    this._service.character$.subscribe(response => {
      

      this.units = [];
      if(response.data === null) {
      
      } else {
        response.data.forEach(element => {
          this.units.push(element);
        });
      }
     


    })
  }



}
