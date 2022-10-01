import {NgModule} from '@angular/core';
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'otro',
    loadChildren: () => import('./pruebas/pruebas.module').then(m => m.PruebasModule)
  },
  {
    path: '**',
    redirectTo: 'app1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: NoPreloading  // PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
