import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { HomeComponent } from './home/home.component';
import {HomeService} from './home.service';

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
