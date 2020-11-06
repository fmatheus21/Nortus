import { AppRoutingModule } from './../app-routing.module';
import { PublicModule } from './../public/public.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContactComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    PublicModule
  ],
  exports: [HeaderComponent, FooterComponent, ContactComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
