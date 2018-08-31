import { Component} from '@angular/core';
import { NavController, NavParams,Nav } from 'ionic-angular';

import { RainPage } from '../rain/rain';
import { PopulationPage } from '../population/population';
import { PopDenPage } from '../pop-den/pop-den';
import { WaterPage } from '../water/water';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [{
    name:"Water Level Rise/Falls",
    description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
    img:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/06/water-bodies-1466850920.jpg",
    component:WaterPage
    },
    {
      name:"Precipitation Rate",
      description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img:"http://lestimes.com/wp-content/uploads/2017/09/rainfall.jpg",
      component:RainPage
    },
    {
      name:"Population",
      description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img:"https://www.thenational.ae/image/policy:1.619311:1502634091/RTX2WC3Q.jpg?f=16x9&w=1200&$p$f$w=5df79b6",
      component:PopulationPage
    },
    {
      name:"Population Density",
      description:" The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
      img:"https://www.worldatlas.com/r/w728-h425-c728x425/upload/53/38/9a/shutterstock-331564118.jpg",
      component:PopDenPage
    }
  ];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
