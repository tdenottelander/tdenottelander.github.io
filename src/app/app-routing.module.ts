import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MondriaanGeneratorPage} from "./pages/projects/mondriaan-generator/mondriaan-generator.page";
import {HomePage} from "./pages/homepage/home.page";

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'projects/mondriaan-generator',
    component: MondriaanGeneratorPage,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
