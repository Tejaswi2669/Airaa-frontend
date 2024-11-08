import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';

// Product Components
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

// Cart Component


// User Components
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

// Admin Components
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { CartComponent } from './cart/cart/cart.component';
import { ProductService } from './product/product.service';
import { CartService } from './service/cart.service';
import { UserService } from './user/user.service';
import { OrderService } from './service/order.service';
import { CategoryService } from './service/category.service';
import { CouponService } from './service/coupon.service';



// Define routes for the application
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent,
    children: [
      { path: 'products', component: AdminProductsComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'orders', component: AdminOrdersComponent }
    ]
  },
  { path: '**', redirectTo: '/products' } // Wildcard route for a 404 page (optional)
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Import RouterModule and register routes
  ],
  providers: [
    ProductService,
    CartService,
    UserService,
    OrderService,
    CategoryService,
    CouponService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
