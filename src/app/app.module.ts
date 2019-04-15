import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactFormService} from './services/contact-form.service';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './directives/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.injector';
import { ErrorInterceptorProvider } from './helpers/error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ContactsComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactFormService,
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    JwtInterceptor,
    ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
