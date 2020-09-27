import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridListComponent } from './grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
