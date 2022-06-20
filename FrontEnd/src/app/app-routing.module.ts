import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AbstractComponent } from './abstract/abstract.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MuralComponent } from './mural/mural.component';
import { NftComponent } from './nft/nft.component';
import { PastelComponent } from './pastel/pastel.component';
import { RegisterComponent } from './register/register.component';
import { WatercolorComponent } from './watercolor/watercolor.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { SellerwishlistComponent } from './sellerwishlist/sellerwishlist.component';
import { SellerhistoryComponent } from './sellerhistory/sellerhistory.component';
import { CharcoalComponent } from './charcoal/charcoal.component';
import { AddworkComponent } from './addwork/addwork.component';
import { AddworkformComponent } from './addworkform/addworkform.component';
import { SellercartComponent } from './sellercart/sellercart.component';

import { AuthguardGuard } from './guard/authguard.guard';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerwishlistComponent } from './buyerwishlist/buyerwishlist.component';
import { AdminComponent } from './admin/admin.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { BuyerCartComponent } from './buyer-cart/buyer-cart.component';
import { BuyerhistoryComponent } from './buyerhistory/buyerhistory.component';
import { AdminCartComponent } from './admin-cart/admin-cart.component';
import { AdminprofileupdateComponent } from './adminprofileupdate/adminprofileupdate.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mural',component:MuralComponent},
  {path:'abstract',component:AbstractComponent},
  {path:'acrylic',component:AcrylicComponent},
  {path:'nft',component:NftComponent},
  {path:'pastel',component:PastelComponent},
  {path:'watercolor',component:WatercolorComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'mural/product',component:ProductComponent},

    

  {path:'admin',component:AdminComponent,children:[
                    {path:'acart/:id/:name/:price/:dimension/:category/:artist/:image',component:AdminCartComponent},
                    {path:'adminprofile',component:AdminprofileComponent},
                    {path:'addwork',component:AddworkformComponent},
  ]},
  {path:'adminprofileupdate',component:AdminprofileupdateComponent},
  {path:'buyer',component:BuyerComponent,children:[
                              {path:'bwishlist',component:BuyerwishlistComponent},
                              {path:'bprofile',component:BuyerProfileComponent},
                              {path:'bcart/:id/:name/:price/:dimension/:category/:artist/:image',component:BuyerCartComponent},
                              {path:'border',component:BuyerhistoryComponent}
  ]},

  {path:'seller',
  canActivate:[AuthguardGuard],
  component:SellerComponent,children:[
                    {path:'profile',component:SellerprofileComponent},
                    {path:'wishlist',component:SellerwishlistComponent},
                    {path:'sellerhistory',component:SellerhistoryComponent},
                    {path:'addwork',component:AddworkformComponent},
                    {path:'cart/:id/:name/:price/:dimension/:category/:artist/:image',component:SellercartComponent}]},
  {path:'charcoal',component:CharcoalComponent},
  {path:'product/:id/:name/:price/:dimension/:category/:artist/:image/:description',component:ProductComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
