import { Component, OnInit } from '@angular/core';
import { AutenticathionService } from 'src/app/services/autenticathion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authUser: boolean = false;

  constructor(private auth: AutenticathionService) { }

  ngOnInit(): void {
    this.authUser = this.auth.authenticated();
  }

  logout(): void {
    this.auth.logout();
    this.authUser = false;
    window.location.reload();
  }

}
