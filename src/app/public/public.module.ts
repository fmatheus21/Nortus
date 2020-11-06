import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ClientComponent } from './client/client.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { SeoComponent } from './seo/seo.component';
import { NumberComponent } from './number/number.component';



@NgModule({
  declarations: [SliderComponent, ClientComponent, HomeAboutComponent, SeoComponent, NumberComponent],
  imports: [
    CommonModule
  ],
  exports: [SliderComponent, ClientComponent, HomeAboutComponent, SeoComponent, NumberComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PublicModule { }
