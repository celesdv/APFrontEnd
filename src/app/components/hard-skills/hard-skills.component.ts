import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent implements OnInit {
  hardSkillList:any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.hardSkillList=data.hardSkill;
    });
  }

}
