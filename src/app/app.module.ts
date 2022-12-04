import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubePipe } from './pipe/youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    MenuComponent,
    HomeComponent,
    YoutubePipe
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Auth0
    AuthModule.forRoot({
      domain: 'dev-n1iph5bv.us.auth0.com',
      clientId: 'aetvPBHxvuNjrxrnOUwdfK4ytE8jHEAF',
      // Opcionales
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
