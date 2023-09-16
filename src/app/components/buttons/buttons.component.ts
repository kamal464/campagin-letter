import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

 
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log(this.router.url);
    this.route.url.subscribe(segments => {
      console.log(segments);
    });
  }
  
  openInNewTab(route: string) {
    const absoluteUrl = this.router.createUrlTree(['/', route]);
    window.open(absoluteUrl.toString(), '_blank');
  }
}
