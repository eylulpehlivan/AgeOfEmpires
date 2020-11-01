import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  character$ = this.store.select(p => p.characterState);
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }


  getAllCharacter() {
    return this.http.get('assets/age-of-empires-units.json').pipe(map((p: any) => p.units));
  }

  getCharacterByFilter(myFilter: any) {
    let data: any[];
    return this.getAllCharacter().pipe(map((p: any[]) => {
      data = p;
      if (myFilter.age) {
        data = data.filter(unit => unit.age ? unit.age === myFilter.age : unit);
      
      }
      if (myFilter.wood) {
        console.log(myFilter.wood);
        data = data.filter(unit => unit.cost);
        data = data.filter(unit => unit.cost.Wood <= myFilter.wood);
        console.log(data);

      }
      if (myFilter.food) {
        console.log(myFilter.food);
        data = data.filter(unit => unit.cost);
        data = data.filter(unit => unit.cost.Food <= myFilter.food);
        console.log(data);

      }
      if (myFilter.gold) {
        console.log(myFilter.gold);
        data = data.filter(unit => unit.cost);
        data = data.filter(unit => unit.cost.Gold <= myFilter.gold);
        console.log(data);

      }
      return data;

    }))


  }


}