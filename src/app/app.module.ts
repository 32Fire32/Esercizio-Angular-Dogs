import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// componenti
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ContactChildComponent } from './component/contact-child/contact-child.component';
import { ExamplesComponent } from './component/examples/examples.component';
import { HttpClientModule }  from '@angular/common/http';
// moduli
import { AppRoutingModule } from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { HighlightDirective } from './direttive/highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HighlightDirective,
    AboutComponent,
    ContactComponent,
    ExamplesComponent,
    HomepageComponent,
    ContactChildComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
