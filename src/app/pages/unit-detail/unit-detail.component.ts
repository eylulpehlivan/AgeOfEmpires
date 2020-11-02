import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CharacterService } from 'src/app/_services';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_state/state';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private _service: CharacterService,
    ) { }

  
    unit: any;

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.getCharacterById(parseInt(params["id"]));
      })
    }
 
  getCharacterById(id: number) {
    this._service.getCharacterById(id).subscribe(p => {
      this.unit = p;
    })
  }
 

  


}
