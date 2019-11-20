import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <editor [init]="{
          base_url: '/tinymce',
          suffix: '.min',
          plugins: 'lists advlist',
          toolbar: 'undo redo | bold italic | bullist numlist outdent indent'
        }"></editor>
      </nb-card-body>
    </nb-card>
  `,
})
export class TinyMCEComponent {
}
