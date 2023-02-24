import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { HomeLandingComponent } from './component/home-landing/home-landing.component';
import { FeaturesComponent } from './component/features/features.component';
import { ProfileComponent } from './interface/profile/profile.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './interface/login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    HomeLandingComponent,
    FeaturesComponent,
    ProfileComponent,
    FooterComponent,
    LoginComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    GoogleMapsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
