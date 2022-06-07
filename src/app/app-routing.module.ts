import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';
import { RouterModule, Routes } from '@angular/router';
import { LivingAreaComponent } from './living-area/living-area.component';
import { Bathroom1Component } from './bathroom1/bathroom1.component';
import { Bathroom2Component } from './bathroom2/bathroom2.component';
import { Bedroom1Component } from './bedroom1/bedroom1.component';
import { Bedroom2Component } from './bedroom2/bedroom2.component';
import { AuthGuard } from './auth.guard';
import { LockedDoorComponent } from './locked-door/locked-door.component';

const routes: Routes = [
  { path: '', redirectTo: '/living', pathMatch: 'full' },
  { path: 'living', component: LivingAreaComponent },
  { path: 'kitchen', component: KitchenComponent, canActivate: [AuthGuard] },
  {
    path: 'bathroom1',
    component: Bathroom1Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'bathroom2',
    component: Bathroom2Component,
    canActivate: [AuthGuard],
  },
  { path: 'bedroom1', component: Bedroom1Component, canActivate: [AuthGuard] },
  { path: 'bedroom2', component: Bedroom2Component, canActivate: [AuthGuard] },
  { path: 'locked', component: LockedDoorComponent },

  { path: '**', redirectTo: 'living' },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
