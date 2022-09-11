import { Component, OnInit } from '@angular/core';
import { AutenticathionService } from 'src/app/services/autenticathion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceList:any;
  authUser: boolean = false;

  constructor(private dataPortfolio:PortfolioService, private auth:AutenticathionService) { }

  ngOnInit(): void {    
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.experienceList=data.experience;
    });
    this.authUser = this.auth.authenticated();
  }

}
