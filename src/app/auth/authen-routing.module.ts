import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiginComponent} from './sigin/sigin.component';
import {SignupComponent} from './sigup/sigup.component';
const authenRouting: Routes = [
  {path: 'register', component: SignupComponent},
  {path: 'signin', component: SiginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authenRouting)],
  exports: [RouterModule]
})

export class AuthenRoutingModule {

}
