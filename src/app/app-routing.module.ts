import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateReastaurantComponent } from './update-reastaurant/update-reastaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ListRestaurantComponent} from './list-restaurant/list-restaurant.component'

const routes: Routes = [
  {
    component: AddRestaurantComponent,
    path: 'add',
  },
  {
    component: UpdateReastaurantComponent,
    path: 'update',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: RegisterComponent,
    path: 'register',
  },
  {
    component: ListRestaurantComponent,
    path: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
