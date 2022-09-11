import { Component, OnInit } from '@angular/core';
import { AutenticathionService } from 'src/app/services/autenticathion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent implements OnInit {
  hardSkillList:any;
  authUser: boolean = false;

  constructor(private dataPortfolio:PortfolioService, private auth:AutenticathionService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.hardSkillList=data.hardSkill;
    });    
    this.authUser = this.auth.authenticated();
  }

}
