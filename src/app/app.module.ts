import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { AppRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { TablamultiplicarroutingComponent } from './components/tablamultiplicarrouting/tablamultiplicarrouting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent,
    TablamultiplicarroutingComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [AppRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
