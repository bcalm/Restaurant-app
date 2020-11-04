import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateReastaurantComponent } from './update-reastaurant/update-reastaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    UpdateReastaurantComponent,
    LoginComponent,
    RegisterComponent,
    ListRestaurantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
