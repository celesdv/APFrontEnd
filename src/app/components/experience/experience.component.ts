import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceList:any
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {    
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.experienceList=data.experience;
    });
  }

}
