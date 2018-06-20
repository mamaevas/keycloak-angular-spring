import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    DataService,
    {provide: APP_INITIALIZER, useFactory: kcFactory, deps: [AuthService], multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function kcFactory(keycloakService: AuthService) {
  return () => keycloakService.init();
}
