import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsongComponent } from './comps/addsong/addsong.component';
import { AllsongsComponent } from './comps/allsongs/allsongs.component';
import { SongComponent } from './comps/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsongComponent,
    AllsongsComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
