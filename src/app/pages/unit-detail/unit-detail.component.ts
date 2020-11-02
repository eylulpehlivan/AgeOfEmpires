import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CharacterService } from 'src/app/_services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/state';
import { Save, Update } from 'src/app/_state/character.actions';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private _service: CharacterService,
    private store: Store<AppState>
    ) { }

    UnitDetail= [];
    IdFilter = {};
    public id: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getByIdFilter(params["id"]);
    })
    this.subscribeState();

  }
 
  changeFilter() {
    this.IdFilter = {
      id: this.id
    }
  }
  getByIdFilter(item:any){
    this.id = item;
    this.changeFilter();
    this.store.dispatch(new Update(this.IdFilter));
  }

  subscribeState() {
    this._service.character$.subscribe(response => {

      this.UnitDetail = [];
      if (response.data === null) {

      } else {
        response.data.forEach(element => {
          this.UnitDetail.push(element);
        });
      }

    })
  }

}
