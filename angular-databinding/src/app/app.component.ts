import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'testServer', content: "test content" }
  ];

  onServerAdded(serverData: { newServerName: string, newServerContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.newServerName,
      content: serverData.newServerContent
    });
  }

  onBlueprintAdded(blueprintData: { newServerName: string, newServerContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.newServerName,
      content: blueprintData.newServerContent
    });
  }
}
