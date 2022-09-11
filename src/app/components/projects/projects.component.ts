import { Component, OnInit } from '@angular/core';
import { AutenticathionService } from 'src/app/services/autenticathion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList:any;
  authUser: boolean = false;

  constructor(private dataPortfolio:PortfolioService, private auth:AutenticathionService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.projectList=data.project;
    });    
    this.authUser = this.auth.authenticated();
  }

}
