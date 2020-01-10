import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HospitalHomeComponent } from './pages/hospital-home/hospital-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'HospitalHome', pathMatch: 'full' },
  { path: 'HospitalHome', component: HospitalHomeComponent, data: { title: '医院首页' } },
  { path: 'NotFound', component: NotFoundComponent, data: { title: '404' } },
  {
    path: 'Appointment', loadChildren: () => import(`./modules/appointment/appointment.module`).then(m => m.AppointmentModule),
    data: { title: '自助预约' }
  },
  {
    path: 'Registered', loadChildren: () => import(`./modules/registered/registered.module`).then(m => m.RegisteredModule),
    data: { title: '自助挂号' }
  },
  { path: '**', redirectTo: 'NotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
