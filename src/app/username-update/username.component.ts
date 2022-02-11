import {Component} from "@angular/core";

@Component({
  selector:'app-username',
  templateUrl:'./username.component.html'
})
export class UsernameComponent{
 username = '';

  OnUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}
