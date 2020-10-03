import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsourceComponent } from './outsource.component';
import { RouterModule } from '@angular/router';
import { IncludeModule } from '../../includes/include.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatSelectModule } from '@angular/material';
import { ShareModule } from 'src/app/webportal/share/share.module';
// import { WelcomeComponent } from '../../modules/welcome/welcome.component';


// import { FlexLayoutModule } from '@angular/flex-layout';
// import { ShopComponent } from '../../modules/shop/shop.component';
// import { CustomerLoginComponent } from '../../modules/customer-login/customer-login.component';
// import { CustomerRegisterComponent } from '../../modules/customer-register/customer-register.component';
// import { WasteRequestComponent } from '../../modules/waste-request/waste-request.component';
// import { CartComponent } from '../../modules/cart/cart.component';
// import { CustomerFeedbackComponent } from '../../modules/customer-feedback/customer-feedback.component';
// import { LocationComponent } from '../../modules/waste-request/location/location.component';

// import { ProductDetailsComponent } from '../../modules/product-details/product-details.component';
// import { WptermsComponent } from '../../modules/wpterms/wpterms.component';
// import { TermDetailsComponent } from '../../modules/term-details/term-details.component';
// import { CustomerLogoutComponent } from '../../modules/customer-logout/customer-logout.component';
// import { OutWasteRequsetComponent } from '../../modules/out-waste-requset/out-waste-requset.component';
// import { ShowEventComponent } from '../../modules/show-event/show-event.component';
// import { EventDetailsComponent } from '../../modules/show-event/event-details/event-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
// import { CheckOutComponent } from '../../modules/check-out/check-out.component';
// import { NavbarComponent } from '../../includes/navbar/navbar.component';
// import { CustomerAccountComponent } from '../../modules/customer-account/customer-account.component';
// import { RecycledProductAddComponent } from '../../modules/Outsource-company/recycled-product-add/recycled-product-add.component';

@NgModule({
  declarations: [
    OutsourceComponent,
    // WelcomeComponent,
    // ShopComponent,
    // CustomerLoginComponent,
    // CustomerRegisterComponent,
    // WasteRequestComponent,
    // CartComponent,
    // CustomerFeedbackComponent,
    // ProductDetailsComponent,
    // WptermsComponent,
    // TermDetailsComponent,
    // CustomerLogoutComponent,
    // OutWasteRequsetComponent,
    // ShowEventComponent,
    // EventDetailsComponent,
    // LocationComponent,
    // CustomerFeedbackComponent,
    // CheckOutComponent,
    // CustomerAccountComponent,
    // RecycledProductAddComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    IncludeModule,
    MatSidenavModule,
    MatDividerModule,
    //FlexLayoutModule,
    ShareModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'googleapikey',
      libraries: ['places'],
    }),
  ],
  providers: [
      //NavbarComponent
    ],
})
export class OutModule {}