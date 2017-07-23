import {NgModule} from '@angular/core';
import {SignupComponent} from './sigup/sigup.component';
import {SiginComponent} from './sigin/sigin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthenRoutingModule} from './authen-routing.module';

@NgModule({
  declarations: [
    SiginComponent,
    SignupComponent
  ],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, AuthenRoutingModule]
})

export class AuthenModule {

}
