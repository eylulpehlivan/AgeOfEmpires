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
    return this.http.get('assets/age-of-empires-units.json').pipe(map((p : any) => p.units));
  }

  getCharacterByFilter(power: any) {
    console.log(power)
    if(power.type == "Wood"){
      return this.getAllCharacter().pipe(map((p: any[]) => {
        return p.filter(unit => unit.cost ? unit.cost.Wood <= power.value: "");
        
      }))
    }else if(power.type == "Food"){
      return this.getAllCharacter().pipe(map((p: any[]) => {
        return p.filter(unit => unit.cost ? unit.cost.Food <= power.value: "");
        
      }))
    }
    else if(power.type == "Gold"){
      return this.getAllCharacter().pipe(map((p: any[]) => {
        return p.filter(unit => unit.cost ? unit.cost.Food <= power.value: "");
        
      }))
    }else if(power.type == "age"){
      return this.getAllCharacter().pipe(map((p: any[]) => {
        return p.filter(unit => unit.age == power.value);
        
      }))
    }
  }
  
  
}