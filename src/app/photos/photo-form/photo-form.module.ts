import { VMessagesMoudule } from './../../shared/components/vmessages/vmessages.module';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      VMessagesMoudule,
     ],
})
export class PhotoFormModule { }
