import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonEditorComponent } from './tap-json-editor.component';

export * from './tap-json-editor.component';
export * from './tap-json-editor.options';

@NgModule({
    imports: [CommonModule],
    declarations: [
        JsonEditorComponent
    ],
    exports: [JsonEditorComponent]
})
export class JSONEditorModule { }
