import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import { ServicesComponent } from './components/services/services.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
