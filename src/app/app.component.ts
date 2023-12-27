import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from 'src/services/loading.service';
import { BlockUIComponent } from './shared/components/block-ui/block-ui.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('blockUI') blockUI!: BlockUIComponent;

  constructor(
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
  }

  showLoading(): void {
    this.loadingService.setLoading(true);

    window.setTimeout(() => {
      this.loadingService.setLoading(false);
    }, 1000);
  }

  openBlockUI(): void{
    this.blockUI.open();
  }
}
