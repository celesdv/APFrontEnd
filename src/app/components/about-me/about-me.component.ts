import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { professional } from 'src/app/model/professional.model';
import { AutenticathionService } from 'src/app/services/autenticathion.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myInformation: professional = new professional('', '', '', '', '');
  authUser: boolean = false;
  formEdit: FormGroup;

  constructor(private dataPortfolio: PortfolioService, private auth: AutenticathionService, private form: FormBuilder,
    private route: Router, private toastr: ToastrService) {
    this.formEdit = this.form.group({
      name: ['', [Validators.maxLength(50)]],
      image: [''],
      position: ['', [Validators.maxLength(50)]],
      banner: [''],
      description: [''],
    })
    this.formEdit.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    this.dataPortfolio.getData().subscribe(data => {
      this.myInformation = data;
    });
    this.authUser = this.auth.authenticated();
  }

  save(event: Event) {
    event.preventDefault();
    if (this.formEdit.valid) {
      const value = this.formEdit.value;
      console.log(value);
      this.update();
    } else {
      this.formEdit.markAllAsTouched();
    }
  }

  onSubmit(event:Event)
  {
    event.preventDefault;
    this.update();
  }

  update(): void {
    let name = this.formEdit.controls['name'].value;
    let image = this.formEdit.controls['image'].value;
    let position = this.formEdit.controls['position'].value;
    let banner = this.formEdit.controls['banner'].value;
    let description = this.formEdit.controls['description'].value;

    let updated = new professional(name, image, position, banner, description)

    this.dataPortfolio.editData(updated).subscribe(data =>{
      console.log("DATA: "+JSON.stringify(data));
      this.toastr.info('Acerca De Ti actualizado con exito!', 'Tarjeta Actualizada');
      this.formEdit.reset();   
      document.getElementById("cerrarAcercaDeModal")?.click();
    })
  }

  loadData() {
    this.formEdit.controls['name'].setValue(this.myInformation.name),
    this.formEdit.controls['image'].setValue(this.myInformation.image),
    this.formEdit.controls['position'].setValue(this.myInformation.position),
    this.formEdit.controls['banner'].setValue(this.myInformation.banner),
    this.formEdit.controls['description'].setValue(this.myInformation.description)
  }

}
