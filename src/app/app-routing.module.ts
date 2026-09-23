import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GravelBirdsComponent } from './pages/projects/gravel-birds/gravel-birds.component';
import { AboutComponent } from './pages/about/about.component';
import { SoajoOutdoorFestComponent } from './pages/projects/soajo-outdoor-fest/soajo-outdoor-fest.component';
import { CarrascalComponent } from './pages/projects/carrascal/carrascal.component';
import { AutalantisComponent } from './pages/projects/autalantis/autalantis.component';
import { HswComponent } from './pages/projects/hsw/hsw.component';
import { CafeCentralComponent } from './pages/projects/cafe-central/cafe-central.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gravel-birds', component: GravelBirdsComponent },
  { path: 'soajo-outdoor-fest', component: SoajoOutdoorFestComponent },
  { path: 'heading-southwest', component: HswComponent },
  { path: 'cafe-central', component: CafeCentralComponent },
  { path: 'refugio-carrascal', component: CarrascalComponent },
  { path: 'autalantis', component: AutalantisComponent },
  { path: 'about', component: AboutComponent },
  { path:'',redirectTo:'/', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
