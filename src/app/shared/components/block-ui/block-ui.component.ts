import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.scss']
})
export class BlockUIComponent {
  private _showBlockUI = false;

  get showBlockUI(): boolean {
    return this._showBlockUI;
  }

  open(): void {
    this._showBlockUI = true;
    console.log('_showBlockUI', this._showBlockUI);
    document.body.classList.add('overflow-hidden');
    document.querySelectorAll('button, input, a, [tabindex]').forEach(function(element) {
      element.setAttribute('tabindex', '-1');
    });

  }

  close(): void{
    this._showBlockUI = false;
    document.body.classList.remove('overflow-hidden');
    document.querySelectorAll('button, input, a, [tabindex]').forEach(function(element) {
      element.removeAttribute('tabindex');
    });
  }
}
