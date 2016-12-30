import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'music', component: MusicComponent },
    { path: 'gifts', component: GiftsComponent },
    { path: 'contactus', component: ContactusComponent },
    //  {
    //    path: 'heroes',
    //    component: HeroListComponent,
    //    data: { title: 'Heroes List' }
    //  },  
    { path: '**', component: HomeComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HomeComponent,
        BlogComponent,
        MoviesComponent,
        MusicComponent,
        GiftsComponent,
        ContactusComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
