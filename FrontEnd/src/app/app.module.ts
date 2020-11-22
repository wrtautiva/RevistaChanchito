import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './@comoponents/about/about.module';
import { ContactModule } from './@comoponents/contact/contact.module';
import { CopyrightModule } from './@comoponents/copyright/copyright.module';
import { FooterModule } from './@comoponents/footer/footer.module';
import { HeaderModule } from './@comoponents/header/header.module';
import { NavbarModule } from './@comoponents/navbar/navbar.module';
import { PortafolioModule } from './@comoponents/portafolio/portafolio.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    HeaderModule,
    NavbarModule,
    PortafolioModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
