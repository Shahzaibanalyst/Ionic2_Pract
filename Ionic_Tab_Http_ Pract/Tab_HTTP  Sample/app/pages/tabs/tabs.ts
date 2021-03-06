import {Page} from 'ionic-angular';
import {Home} from '../home/home';
import {Info} from '../info/info';
import {Add} from '../add/add';
import {About} from './../about/about';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Home;
  tab2Root: any = Add;
  tab3Root: any = Info;
  tab4Root : any = About;
  //tab3Root: any = Page3;
  
}
