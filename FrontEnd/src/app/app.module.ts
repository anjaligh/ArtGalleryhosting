import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PastelComponent } from './pastel/pastel.component';
import { NftComponent } from './nft/nft.component';
import { AbstractComponent } from './abstract/abstract.component';
import { WatercolorComponent } from './watercolor/watercolor.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { MuralComponent } from './mural/mural.component';
import { CharcoalComponent } from './charcoal/charcoal.component';
import { HeaderComponent } from './header/header.component';


import { ProductComponent } from './product/product.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { SellerComponent } from './seller/seller.component';
import { SellerwishlistComponent } from './sellerwishlist/sellerwishlist.component';
import { SellerprofileComponent } from './sellerprofile/sellerprofile.component';
import { SellerhistoryComponent } from './sellerhistory/sellerhistory.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artist/artist.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerhistoryComponent } from './buyerhistory/buyerhistory.component';
import { BuyerwishlistComponent } from './buyerwishlist/buyerwishlist.component';
import { AdminComponent } from './admin/admin.component';
import { AddworkComponent } from './addwork/addwork.component';
import { AddworkformComponent } from './addworkform/addworkform.component';
import { SellercartComponent } from './sellercart/sellercart.component';
import { CustomvalidatorsService } from './services/customvalidators.service';
import { AuthservicesService } from './services/authservices.service';

import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminprofileupdateComponent } from './adminprofileupdate/adminprofileupdate.component';

import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { BuyerCartComponent } from './buyer-cart/buyer-cart.component';
import { AdminCartComponent } from './admin-cart/admin-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    AboutusComponent,
    PastelComponent,
    NftComponent,
    AbstractComponent,
    WatercolorComponent,
    AcrylicComponent,
    MuralComponent,
    CharcoalComponent,
    ProductComponent,
    FooterComponent,
    SellerComponent,
    SellerwishlistComponent,
    SellerprofileComponent,
    SellerhistoryComponent,
    ArtistsComponent,
    ArtistComponent,
    BuyerComponent,
    BuyerhistoryComponent,
    BuyerwishlistComponent,
    AdminComponent,
    HeaderComponent,
    AddworkComponent,
    AddworkformComponent,
    SellercartComponent,

    AdminprofileComponent,
    AdminprofileupdateComponent,

    BuyerProfileComponent,
    BuyerCartComponent,
    AdminCartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    SlickCarouselModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [CustomvalidatorsService,AuthservicesService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
