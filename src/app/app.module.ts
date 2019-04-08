import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FileViewComponent } from './components/file-view/file-view.component';
import { LoginComponent } from './components/login/login.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { ResourceNotFoundComponent } from './components/snackbar/resource-not-found/resource-not-found.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { SnackbarService } from './services/snackbar.service';
import { ComponentNotFoundComponent } from './components/component-not-found/component-not-found.component';
import { SidenavContentComponent } from './components/sidenav-content/sidenav-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { UserService } from './services/user.service';
import { ToolbarButtonComponent } from './components/file-view/toolbar-button/toolbar-button.component';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    AppComponent,
    FileViewComponent,
    LoginComponent,
    PageFooterComponent,
    PageToolbarComponent,
    ResourceNotFoundComponent,
    ComponentNotFoundComponent,
    SidenavContentComponent,
    DashboardComponent,
    AboutComponent,
    ToolbarButtonComponent
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
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ResourceNotFoundComponent
  ],
  providers: [
    SnackbarService,
    UserService,
    CookieService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
