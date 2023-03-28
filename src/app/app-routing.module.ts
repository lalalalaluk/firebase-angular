import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first-component',
    pathMatch: 'full'
  },
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'second-component', component: SecondComponentComponent },
  {
    path: '**', component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
