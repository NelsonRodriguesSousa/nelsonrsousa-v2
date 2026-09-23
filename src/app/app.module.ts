import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { GravelBirdsComponent } from './pages/projects/gravel-birds/gravel-birds.component';
import { AboutComponent } from './pages/about/about.component';
import { SoajoOutdoorFestComponent } from './pages/projects/soajo-outdoor-fest/soajo-outdoor-fest.component';
import { CarrascalComponent } from './pages/projects/carrascal/carrascal.component';
import { AutalantisComponent } from './pages/projects/autalantis/autalantis.component';
import { HswComponent } from './pages/projects/hsw/hsw.component';
import { CafeCentralComponent } from './pages/projects/cafe-central/cafe-central.component';
import { WeddingsComponent } from './pages/projects/weddings/weddings.component';
import { LaplandComponent } from './pages/lapland/lapland.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GravelBirdsComponent,
    AboutComponent,
    SoajoOutdoorFestComponent,
    CarrascalComponent,
    AutalantisComponent,
    HswComponent,
    CafeCentralComponent,
    WeddingsComponent,
    LaplandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
