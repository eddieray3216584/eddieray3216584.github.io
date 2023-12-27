import { Component, OnInit } from '@angular/core';
import { LoadingItem } from '../../models/loadings.model';

@Component({
  selector: 'app-loadings',
  templateUrl: './loadings.component.html',
  styleUrls: ['./loadings.component.scss'],
})
export class LoadingsComponent implements OnInit {
  private _totalLoadingList: LoadingItem[] = [
    {
      name: 'donut snake',
      keys: [
        'rounded',
        'snake',
        'donut',
        'circular',
        'rotate',
        'rotating',
        'bold',
      ],
      class: 'donut-snake',
    },
  ];

  loadingList: LoadingItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadingList = [...this._totalLoadingList];
    console.log('this.loadingList', this.loadingList);
  }

  search(event: Event): void {
    if (!event || !event.target) return;

    const queryStr = (event.target as HTMLInputElement).value.toLowerCase();
    if (queryStr === '') this.loadingList = [...this._totalLoadingList];

    this.loadingList = this._totalLoadingList.filter(
      (item) =>
        item.name.includes(queryStr) ||
        item.keys.some((key) => key.includes(queryStr))
    );
  }
}
