import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { CepService } from './cep/cep.service';
import { CnpjComponent } from './cnpj/cnpj.component';
import { PrimeNGModule } from './primeng.module';
import { CnpjService } from './cnpj/cnpj.service';

@NgModule({
  declarations: [		
    AppComponent,
      CepComponent,
      CnpjComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNGModule,
    FormsModule
  ],
  providers: [
    CepService,
    MessageService,
    CnpjService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
