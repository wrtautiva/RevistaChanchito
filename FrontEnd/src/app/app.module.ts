import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './@comoponents/about/about.component';
import { ContactComponent } from './@comoponents/contact/contact.component';
import { CopyrightComponent } from './@comoponents/copyright/copyright.component';
import { FooterComponent } from './@comoponents/footer/footer.component';
import { HeaderComponent } from './@comoponents/header/header.component';
import { NavbarComponent } from './@comoponents/navbar/navbar.component';
import { PortafolioModule } from './@comoponents/portafolio/portafolio.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthorComponent} from './@comoponents/author/author.component';
import { ContextComponent} from './@comoponents/context/context.component';

const routes: Routes = [
  {path: '', redirectTo: '/header', pathMatch:'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'context', component: ContextComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CopyrightComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
