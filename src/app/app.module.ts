import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequestpageComponent } from './components/requestpage/requestpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, RequestpageComponent, MainpageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
