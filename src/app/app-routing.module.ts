import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PublicComponent, canActivate:[GuardGuard]},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},
  {path:'log-in', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
