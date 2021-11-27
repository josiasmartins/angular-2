import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
    {
      path: '',
      // tem que exatamento igual a rota de barra
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      // loadChildren: vai carregar o modulo sobre demanda
      // ./ e a pasta atual
      loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
      // adiciona o hash no começo do endereço (#)
        RouterModule.forRoot(routes, { useHash: true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

