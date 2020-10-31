import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {UnitsComponent} from './pages/units/units.component';
import {UnitDetailComponent} from './pages/unit-detail/unit-detail.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'units', component: UnitsComponent},
  { path: 'unit-detail/:id', component: UnitDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
