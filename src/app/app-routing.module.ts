import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FeaturesComponent } from './component/features/features.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './interface/login/login.component';
import { ProfileComponent } from './interface/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'features', component: FeaturesComponent },
  { path: 'contactus', component: ContactusComponent },
  {path:'aboutus',component:AboutusComponent},
  { path: 'login', component: LoginComponent },
  {path:'profile' , component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
