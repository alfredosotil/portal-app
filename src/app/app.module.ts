import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2MapModule} from 'ng2-map';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GlobalService } from './global.service';
import { UtilsService } from './utils.service';
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
import { FilterPropertyPipe } from './pipes/filter-property.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { IsLastDirective } from './directives/is-last.directive';

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
        //        Components
        MainComponent,
        HomeComponent,
        BlogComponent,
        MoviesComponent,
        MusicComponent,
        GiftsComponent,
        ContactusComponent,
        SearchComponent,
        //        Pipes
        FilterPropertyPipe,
        TruncatePipe,
        IsLastDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes), 
        Ng2MapModule.forRoot({apiUrl:'https://maps.google.com/maps/api/js?key=AIzaSyCuHHxRJnJZ3ft03gkqcHyBRZQ13lJnOII'})
    ],
    providers: [
//        App
        GlobalService,
        UtilsService,
        PropertyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(){
    }
}
