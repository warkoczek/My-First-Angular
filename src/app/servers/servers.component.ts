import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean | undefined;
  serverCreationStatus = 'Server was not created';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['First server', 'Second server'];
  constructor() {
    setTimeout(() =>
      {this.allowNewServers = true;},
      3000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
