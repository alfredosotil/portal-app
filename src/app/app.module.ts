import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { NglModule } from 'ng-lightning/ng-lightning';
import { NgSemanticModule } from 'ng-semantic';

import { GlobalService } from './global.service';
import { PropertyService } from './services/property.service';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MusicComponent } from './components/music/music.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
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
        ContactusComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
//        NglModule.forRoot()
        NgSemanticModule
    ],
    providers: [
        GlobalService,
        PropertyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
