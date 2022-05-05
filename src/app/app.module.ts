import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryCache, InMemoryCacheConfig } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  inMermoryCacheConfig: InMemoryCacheConfig
  constructor(
    apollo: Apollo,
    httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: 'http://localhost:5000/graphql'
      }),
      cache: new InMemoryCache()
    })
  }
}
