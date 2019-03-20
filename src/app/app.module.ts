import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FileViewComponent } from './components/file-view/file-view.component';
import { LoginComponent } from './components/login/login.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { RessourceNotFoundComponent } from './components/ressource-not-found/ressource-not-found.component';

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
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
