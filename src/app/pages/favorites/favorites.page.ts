import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  tours = [
    { id: 1, title: 'City walk' },
    { id: 2, title: 'On the trails of Beethoven' },
    { id: 3, title: 'Villa Hammerschmidt' },
  ];

  constructor() {}

  ngOnInit() {}
}
