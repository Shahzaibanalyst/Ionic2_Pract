import {Page,NavController} from 'ionic-angular';

//Import Component.
import {About} from './../about/about';
import {List} from './../ListPage/listpage';
import {Data} from './../DataPage/datapage';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    gotoAbout()
    {
        this.nav.push(About);
    }
    
    gotoData()
    {
        //var data =setTimeout(function() {
             this.nav.push(Data);
       // }, 2000);
        
        //clearTimeout(data);
    }
    
    gotoList()
    {
        this.nav.push(List);
    }
    
}
