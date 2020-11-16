import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nortus';

  constructor(private scriptService: ScriptService, private router: Router) { }

  ngOnInit(): void {

   
    //this.scriptService.loadExternalScript('./assets/js/send-email.js').then(() => { }).catch(() => { });  
    
    
   
  }

}
