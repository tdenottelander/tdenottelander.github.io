import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { HomePage } from './pages/homepage/home.page'
import { StylishCodeGenerationPage } from './pages/projects/stylish-code-generation/stylish-code-generation.page'

const routes: Routes = [
  {
    path: 'stylish-code-generation',
    component: StylishCodeGenerationPage,
  },
  {
    path: '',
    component: HomePage,
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
