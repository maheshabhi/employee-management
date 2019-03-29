import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from "./auth.component";
import { AuthService } from "../auth/auth.service";

// Import PrimengModule
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

// Import Primeng Services

@NgModule({
    declarations: [AuthComponent], 
    imports: [
        CommonModule, AuthRoutingModule, 
        HttpClientModule, ReactiveFormsModule,
        ButtonModule, CardModule, InputTextModule, 
        MessagesModule, MessageModule
    ], 
    providers: [AuthService]
})

export class AuthModule {}