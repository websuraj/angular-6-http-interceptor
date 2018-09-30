import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StausupInterceptor } from './helper/stausupInterceptor'
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CommonsService } from './services/commons.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [CommonsService,{ provide: HTTP_INTERCEPTORS, useClass: StausupInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
