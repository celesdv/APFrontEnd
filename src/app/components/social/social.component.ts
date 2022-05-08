import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socialList:any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.socialList=data.social;
    });
  }

}
