import { Routes } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {InicioComponent} from './inicio/inicio.component';

export const routes: Routes = [{ path: 'information', component: InfoComponent },{ path: 'inicio', component: InicioComponent }];
