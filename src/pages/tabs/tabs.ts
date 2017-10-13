import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MyphotoPage } from '../myphoto/myphoto';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyphotoPage;
  tab3Root = AboutPage;
    

  constructor() {

  }
}
