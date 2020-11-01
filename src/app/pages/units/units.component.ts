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
  goldFilter = true;
  foodFilter = true;
  woodFilter = true;
  myFilter = {};
  public age;
  public wood;
  public food;
  public gold;
  

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

  getByCostWoodFilter(item: any) {
    this.wood = item;
    this.changeFilter();
    this.store.dispatch(new Update(this.myFilter));
  }
  getByCostFoodFilter(item) {
    this.food = item;
    this.changeFilter();
    this.store.dispatch(new Update(this.myFilter));
  }
  getByCostGoldFilter(item) {
    this.gold = item;
    this.changeFilter();
    this.store.dispatch(new Update(this.myFilter));
  }
  changeFilter() {
    this.myFilter = {
      age: this.age,
      wood: this.wood,
      food: this.food,
      gold: this.gold
    }
  }

  getByAgeFilter(age?: string) {
    this.age = age;
    this.changeFilter();
    if (age) {
      this.store.dispatch(new Update(this.myFilter));
    } else {
      this.store.dispatch(new Save());
    }
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
  filterCheck(cost:string){
    if(cost == "wood"){
      this.woodFilter = !this.woodFilter;
      console.log(this.woodFilter);
    }if(cost == "food"){
      this.foodFilter = !this.foodFilter;
      console.log(this.foodFilter);
    }if(cost == "gold"){
      this.goldFilter = !this.goldFilter;
      console.log(this.goldFilter);
    }
    
  }



}
