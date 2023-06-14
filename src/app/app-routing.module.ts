import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "splash",
    loadChildren: () => import("./modules/splash/splash.module").then(m=> m.SplashModule)
  },
  {
    path: "home",
    loadChildren: () => import("./modules/home/home.module").then(m=> m.HomeModule)
  },
  {
    path: "",
    redirectTo:"splash",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
