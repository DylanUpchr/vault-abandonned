import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FileViewComponent } from './components/file-view/file-view.component';
import { LoginComponent } from './components/login/login.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { RessourceNotFoundComponent } from './components/snackbar/ressource-not-found/ressource-not-found.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    FileViewComponent,
    LoginComponent,
    PageFooterComponent,
    PageToolbarComponent,
    RessourceNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
