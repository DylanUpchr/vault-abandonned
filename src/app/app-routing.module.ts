import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileViewComponent } from './components/file-view/file-view.component';
import { LoginComponent } from './components/login/login.component';
import { ComponentNotFoundComponent } from './components/component-not-found/component-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'files', component: FileViewComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ComponentNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
