import {Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ newServerName: string, newServerContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ newServerName: string, newServerContent: string }>();
  newServerContent = '';

  constructor() { }

  ngOnInit(): void { }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({ newServerName: serverNameInput.value,
                                    newServerContent: this.newServerContent });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ newServerName: serverNameInput.value,
                                       newServerContent: this.newServerContent });
  }
}
