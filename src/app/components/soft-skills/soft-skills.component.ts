import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {
  softSkillList:any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.softSkillList=data.softSkill;
    });
  }

}
