import { Component, OnInit } from '@angular/core';
import { professional } from 'src/app/model/professional.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myInformation: professional = new professional("", "", "", "", "", [], [], [], [], [], []);

  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      this.myInformation=data;
    });
  }

}
