import {Component} from "@angular/core";

@Component({
  selector: 'app-displayDetails',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.html']
})


export class DisplayDetailsComponent {
  showPassword = false;
  log = [];

  onToggleDetails(){
    this.showPassword = !this.showPassword;
    // @ts-ignore
    this.log.push(this.log.length +1);
  }
}
