import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
@NgModule({


    exports:[
        ButtonModule,
        InputTextModule,
        KeyFilterModule,
        InputMaskModule,
        MessagesModule,
        ToastModule
    ]
})


export class PrimeNGModule { }