import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { MondriaanGeneratorPage } from './pages/projects/mondriaan-generator/mondriaan-generator.page'
import { HomePage } from './pages/homepage/home.page'
import { StylishCodeGenerationPage } from './pages/projects/stylish-code-generation/stylish-code-generation.page'

const routes: Routes = [
  {
    path: 'mondriaan-generator',
    component: MondriaanGeneratorPage,
  },
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
    // pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
