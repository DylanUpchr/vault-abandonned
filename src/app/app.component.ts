import { SnackbarService } from './services/snackbar.service';
import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RessourceNotFoundComponent } from './components/snackbar/ressource-not-found/ressource-not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vault';
  constructor(public deviceService: DeviceDetectorService,
              public snackbarService: SnackbarService) { }
  ngOnInit() {
    this.snackbarService.open(RessourceNotFoundComponent);
  }
}
