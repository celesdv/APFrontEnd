import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList:any;
  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data=>{
      console.log(data);
      this.projectList=data.project;
    });
  }

}
