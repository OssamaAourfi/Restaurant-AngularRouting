import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './components/titre/titre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SaladeComponent } from './components/salade/salade.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './contacts/register/register.component';
import { ReloginComponent } from './contacts/relogin/relogin.component';
import { ShowallComponent } from './components/showall/showall.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbarComponent,
    SaladeComponent,
    CoffeeComponent,
    PatisserieComponent,
    FooterComponent,
    RegisterComponent,
    ReloginComponent,
    ShowallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
