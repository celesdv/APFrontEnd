import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.scss']
})
export class LogoApComponent implements OnInit {

  constructor(private dataPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }

}
