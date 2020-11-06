import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: './home/home.module#HomeModule' }
    /*{ path: 'error/404', component: NotFoundComponent },
    { path: '**', redirectTo: 'error/404' }*/
	];

  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
