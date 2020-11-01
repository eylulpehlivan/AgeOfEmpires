import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { CharacterService } from '../_services';
import { ActionTypes, All, Save, Update, SaveSuccess, Fail, UpdateSuccess } from './character.actions';


@Injectable()
export class CharacterEffects {

    constructor(
        private actions: Actions,
        private _service: CharacterService,
        // private router: Router,
    ) { }

    @Effect()
    Save: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.SAVE),
        map((action: Save) => {
            return action;
        }),
        switchMap(() => {
            return this._service.getAllCharacter().pipe(
                map((u) => {
                    return new SaveSuccess(u);
                }),
                catchError((error) => {
                    return of(new Fail({ error: error }));
                })
            )
        })
    );

    @Effect()
    Update: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.UPDATE),
        map((action: Update) => {
            return action.payload;
        }),
        switchMap((payload: number) => {
            return this._service.getCharacterByFilter(payload).pipe(
                map((u: any) => {
                    return new UpdateSuccess(u);
                }),
                catchError((error) => {
                    return of(new Fail({ error: error }));
                })
            )
        })
    );

    @Effect({ dispatch: false })
    SaveSuccess: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.SAVE_SUCCESS),
        tap((u) => {
        })
    );

    @Effect({ dispatch: false })
    UpdateSuccess: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.UPDATE_SUCCESS),
        tap((u) => {
        })
    );

    @Effect({ dispatch: false })
    Fail: Observable<any> = this.actions.pipe(
        ofType(ActionTypes.FAIL)
    );

}