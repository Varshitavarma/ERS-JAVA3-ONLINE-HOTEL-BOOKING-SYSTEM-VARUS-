import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoompageComponent } from './pages/roompage/roompage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component'
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGaurdService } from './services/authgaurd.service';
import { PaymentComponent } from './pages/payment/payment.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:RoomsComponent},
  {path:'menu/:id',component:RoompageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'payment',component:PaymentComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'users', component: UserlistComponent },
  { path: 'details/:email', component: UserdetailsComponent },
  { path: 'update/:email', component: UpdateuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

