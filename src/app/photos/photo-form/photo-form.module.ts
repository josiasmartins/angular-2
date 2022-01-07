import { VMessagesMoudule } from './../../shared/components/vmessages/vmessages.module';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      VMessagesMoudule,
     ],
})
export class PhotoFormModule { }
