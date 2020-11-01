import { NgModule } from '@angular/core';


import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// *************************
// Custom Application imports
// *************************
import { CharacterEffects } from './character.effects';
import { reducers } from './state';

@NgModule({
    imports: [
        EffectsModule.forRoot(
            [
                CharacterEffects,
                // MessageEffects
            ]
        ),

        // Signature matches AppState interface
        StoreModule.forRoot(reducers),

    ],
    providers: [],
})
export class AppStateModule { }