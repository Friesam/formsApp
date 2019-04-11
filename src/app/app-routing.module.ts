import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes =[ 
  { path: 'home', component: HomeComponent},
  { path: 'contact', component:ContactsComponent },
  { path: 'services', component:ServicesComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
