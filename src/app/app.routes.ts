import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LostAndFoundComponent } from './lost-and-found/lost-and-found.component';
import { AdaptionComponent } from './adaption/adaption.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { AdoptformComponent } from './adoptform/adoptform.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lost-and-found', component: LostAndFoundComponent },
  { path: 'adaption', component: AdaptionComponent },
  { path: 'adoptform', component: AdoptformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  declarations: []
})
export class AppModule {}
