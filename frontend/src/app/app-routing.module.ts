import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// declare the routes for all pages
const routes: Routes = [
  // root to login, then the route path is empty
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // login route
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/general/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  // assignedtraineeoverview route
  {
    path: 'meineauszubildenden',
    loadChildren: () =>
      import(
        './pages/instructor/assignedtraineeoverview/assignedtraineeoverview.module'
      ).then((m) => m.AssignedtraineeoverviewPageModule),
  },
  // traineeoverview route
  {
    path: 'alleauszubildenden',
    loadChildren: () =>
      import('./pages/instructor/traineeoverview/traineeoverview.module').then(
        (m) => m.TraineeoverviewPageModule
      ),
  },
  // gradeoverview route
  {
    path: 'notenuebersicht',
    loadChildren: () =>
      import('./pages/trainee/gradeoverview/gradeoverview.module').then(
        (m) => m.GradeoverviewPageModule
      ),
  },
  // error routing
  {
    path: '**',
    loadChildren: () =>
      import('./pages/general/errorpage/error.module').then(
        (m) => m.ErrorPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
