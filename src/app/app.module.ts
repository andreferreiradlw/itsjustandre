import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      MenuComponent,
      HeroComponent,
      AboutComponent,
      ExperienceComponent,
      ProjectsComponent,
      RepositoriesComponent,
      ContactComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ScrollToModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
