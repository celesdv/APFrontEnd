import { Component, OnInit } from '@angular/core';
import { AutenticathionService } from 'src/app/services/autenticathion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {
  softSkillList:any;
  authUser: boolean = false;

  constructor(private dataPortfolio:PortfolioService, private auth:AutenticathionService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.softSkillList=data.softSkill;
    });    
    this.authUser = this.auth.authenticated();
  }

}
