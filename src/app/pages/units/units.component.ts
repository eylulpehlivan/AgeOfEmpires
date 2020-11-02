import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

import { CharacterService } from 'src/app/_services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/state';
import { Save, Update } from 'src/app/_state/character.actions';
import { AgeEnum } from 'src/app/_model/ages.enum';
import { AGES } from "src/app/_mock/ages.mock";
import { Cost } from 'src/app/_model/cost';
import { COSTS } from 'src/app/_mock/costs.mock';
import { CostEnum } from 'src/app/_model/costs.enum';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],

})

export class UnitsComponent implements OnInit {

  ages: AgeEnum[] = AGES;
  costs: Cost[] = COSTS;
  units: any[];
  myFilter = {};
  public age;
  public wood;
  public food;
  public gold;

  constructor(
    private _service: CharacterService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.costs = COSTS;
    this._service.getAllCharacter();
    this.subscribeState();
    this.save();
  }

  save() {
    this.store.dispatch(new Save());
  }

  getByCost(cost: Cost) {

    switch (cost.title) {
      case CostEnum.Wood:
        this.wood = cost.isActive ? cost.val : null;
        this.changeFilter();
        this.store.dispatch(new Update(this.myFilter));
        break;
      case CostEnum.Food:
        this.food = cost.isActive ? cost.val : null;
        this.changeFilter();
        this.store.dispatch(new Update(this.myFilter));
        break;
      case CostEnum.Gold:
        this.gold = cost.isActive ? cost.val : null;
        this.changeFilter();
        this.store.dispatch(new Update(this.myFilter));
        break;
      default:
        break;
    }
  }

  getByAgeFilter(age: string) {
    this.age = age;
    this.changeFilter();
    if (age === AgeEnum.All) {
      this.store.dispatch(new Save());
    } else {
      this.store.dispatch(new Update(this.myFilter));
    }
  }

  subscribeState() {
    this._service.character$.subscribe(response => {
      this.units = response.data ? response.data : [];
    })
  }

  switch(cost : Cost){
    cost.isActive = !cost.isActive;
    this.getByCost(cost)
  }

  changeFilter() {
    this.myFilter = {
      age: this.age,
      wood: this.wood,
      food: this.food,
      gold: this.gold
    }
  }
}