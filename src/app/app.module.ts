import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './experience/tabs/tabs.component';
import { TabComponent } from './experience/tab/tab.component';
import { SocialComponent } from './social/social.component';
import { EmailComponent } from './email/email.component';
import { LoadingComponent } from './loading/loading.component';



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
      FooterComponent,
      TabsComponent,
      TabComponent,
      SocialComponent,
      EmailComponent,
      LoadingComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ScrollToModule.forRoot(),
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
