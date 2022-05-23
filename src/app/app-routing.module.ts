import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { SaladeComponent } from './components/salade/salade.component';
import { ShowallComponent } from './components/showall/showall.component';
import { RegisterComponent } from './contacts/register/register.component';
import { ReloginComponent } from './contacts/relogin/relogin.component';

const routes: Routes = [
  {path : "" , component:ShowallComponent},   
  {path : "patisserie" , component:PatisserieComponent},   
  {path : "coffee" , component:CoffeeComponent},   
  {path : "salade" , component:SaladeComponent},   
  {path : "register" , component:RegisterComponent}, 
  {path : "relogin" , component:ReloginComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {  }
