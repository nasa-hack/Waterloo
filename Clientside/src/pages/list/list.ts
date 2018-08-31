import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [{
    name:"Water Level Rise/Falls",
    description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
    img:"https://healthitanalytics.com/images/site/features/_normal/ThinkstockPhotos-645261596.jpg"
    },
    {
      name:"Population",
      description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img:"https://healthitanalytics.com/images/site/features/_normal/ThinkstockPhotos-645261596.jpg"
    },
    {
      name:"Population Density",
      description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img:"https://healthitanalytics.com/images/site/features/_normal/ThinkstockPhotos-645261596.jpg"
    },
    {
      name:"Precipitation Rate",
      description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img:"https://healthitanalytics.com/images/site/features/_normal/ThinkstockPhotos-645261596.jpg"
    },
  ];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
