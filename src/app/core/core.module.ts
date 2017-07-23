/**
 * Created by linhtran on 12/07/17.
 */
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [AppRoutingModule, CommonModule],
  exports: [HeaderComponent, HomeComponent]
})

export class CoreModule {

}
