
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentModule } from './student/student.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  }
];

@NgModule({

  imports: [BrowserModule,RouterModule.forRoot(routes),StudentModule],
  exports: [RouterModule],

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
