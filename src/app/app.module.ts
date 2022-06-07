import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FloorplanComponent } from './floorplan/floorplan.component';
import { LivingAreaComponent } from './living-area/living-area.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BarComponent } from './bar/bar.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AppRoutingModule } from './app-routing.module';
import { Bedroom1Component } from './bedroom1/bedroom1.component';
import { Bedroom2Component } from './bedroom2/bedroom2.component';
import { Bathroom1Component } from './bathroom1/bathroom1.component';
import { Bathroom2Component } from './bathroom2/bathroom2.component';
import { LockedDoorComponent } from './locked-door/locked-door.component';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [
    AppComponent,
    FloorplanComponent,
    LivingAreaComponent,
    KitchenComponent,
    BarComponent,
    MainviewComponent,
    Bedroom1Component,
    Bedroom2Component,
    Bathroom1Component,
    Bathroom2Component,
    LockedDoorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
