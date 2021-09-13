import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body/body.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateApplicationComponent } from './forms/create-application/create-application.component';
import { CreateCellComponent } from './forms/create-cell/create-cell.component';
import { AssociateAppComponent } from './forms/associate-app/associate-app.component';
import { DisplayCellComponent } from './body/cell/display-cell/display-cell.component';
import { DisplayApplicationComponent } from './body/app/display-application/display-application.component';
import { SidemenuComponent } from './body/sidemenu/sidemenu/sidemenu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    CreateApplicationComponent,
    CreateCellComponent,
    AssociateAppComponent,
    DisplayCellComponent,
    DisplayApplicationComponent,
    SidemenuComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
