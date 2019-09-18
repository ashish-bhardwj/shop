import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  { path: 'product/:id',component:ProductDetailComponent},
  { path: 'cart',component:CartComponent},
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
