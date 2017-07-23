import {Component, OnInit} from "@angular/core";
import {AuthenService} from "./auth/authen.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  feature = 'recipe';

  constructor(private authenService: AuthenService) {
  }

  ngOnInit() {
    this.authenService.initFireBase();
    console.log(this.authenService.isAuthenticated());
  }

  selectedFeature(feature: string) {
    this.feature = feature;
  }

}
