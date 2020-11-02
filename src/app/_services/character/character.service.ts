import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/state';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
    return this.http.get(environment.apiUrl).pipe(map((p: any) => p.units));
  }

  getCharacterByFilter(filter: any) {
    let data: any[];
    return this.getAllCharacter().pipe(map((p: any[]) => {
      data = p;
      if (filter.age) {
        data = data.filter(unit => unit.age ? unit.age === filter.age : unit);
      }
      if (filter.wood) {
        data = data.filter(unit => unit.cost);
        data = data.filter(unit => unit.cost.Wood <= filter.wood);

      }
      if (filter.food) {
        data = data.filter(unit => unit.cost);
        data = data.filter(unit => unit.cost.Food <= filter.food);

      }
      if (filter.gold) {
        data = data.filter(unit => unit.cost);
        data = data.filter(unit => unit.cost.Gold <= filter.gold);

      }
      if (filter.id) {
        data = data.filter(unit => unit.id);
        data = data.filter(unit => unit.id == filter.id);
      
      }
      return data;

    }))


  }


}