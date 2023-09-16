import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template1Component } from './components/template1/template1.component';
import { Template2Component } from './components/template2/template2.component';
import { Template3Component } from './components/template3/template3.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const routes: Routes = [
  { path: '1', component: Template1Component },
  { path: '2', component: Template2Component },
  { path: '3', component: Template3Component },
  // { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'ButtonsComponent', component: ButtonsComponent },
  { path: '', redirectTo: '/ButtonsComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
