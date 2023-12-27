import { Component, Input, ViewChild } from '@angular/core';
import { BlockUIComponent } from '../block-ui/block-ui.component';

@Component({
  selector: 'app-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrls: ['./loading-mask.component.scss'],
})
export class LoadingMaskComponent {
  @ViewChild('blockUI') blockUI!: BlockUIComponent;
  _isLoading = false;

  @Input() set isLoading(val: boolean | null) {
    this._isLoading = !!val;
    if (!this.blockUI) return;
    val ? this.blockUI.open() : this.blockUI.close();
  }
  get isLoading() {
    return this._isLoading;
  }
}
