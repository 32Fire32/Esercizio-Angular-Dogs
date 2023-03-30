import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './component/about/about.component';
import { ContactChildComponent } from './component/contact-child/contact-child.component';
import { ContactComponent } from './component/contact/contact.component';
import { ExamplesComponent } from './component/examples/examples.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NotFoundComponent } from './component/not-found/not-found.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/homepage'},
  {path:'homepage', component: HomepageComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], children:[
    {path:':id', component: ContactChildComponent},
  ]},
  {path:'examples', component: ExamplesComponent},
  {path:'404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
