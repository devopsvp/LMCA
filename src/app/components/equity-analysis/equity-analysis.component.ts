import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { EquityAnalysisService } from '../../services/equity-analysis.service';
import { CountyService } from '../../services/county.service';
import { State } from '../../typescript/state';
import { County } from '../../typescript/county';

@Component({
  selector: 'app-equity-analysis',
  templateUrl: './equity-analysis.component.html',
  styleUrls: ['./equity-analysis.component.css'],
  providers: [CountyService]
})
export class EquityAnalysisComponent implements OnInit {

  selectedCounty: County = new County(0, 'India');
  counties: County[];
  states: State[];

  @ViewChild('equityAnalysisForm') _equityAnalysisForm: NgForm;

  constructor(private userGetEquityService: EquityAnalysisService,
    private _countyservice: CountyService,
    private router: Router) {
    this.counties = this._countyservice.getCounties();
  }

  userEquityAnalysis: object = {};
  retriveTrue: boolean = false;
  submitTrue: boolean = false;
  // submitBtn: boolean = false;
  // missingValue: boolean = false;
  dataValue: any = {};

  dataValueDetails: any = {};


  onSelect(countyid) {
    this.states = this._countyservice.getStates()
      .filter((item) => item.countyid == countyid);
  }

  onRetrive() {
    this.retriveTrue = true;

    this.userGetEquityService.getEquityAnalysisMissingDetails()
      .subscribe(data => {
        // this.missingValue = false;
        for (let i = 0; i < data.LMCA.length; i++) {
          if (data.LMCA[i].ModelRun == this.userEquityAnalysis['ModelRun'] && data.LMCA[i].CCLoanNumber == this.userEquityAnalysis['CCLoanNumber']) {
            this.dataValue = data.LMCA[i];
            //  if (data.LMCA[i].ZipCode == "") {

            //   this.submitBtn = false;

            // } else if (data.LMCA[i].MortgageInsuInvestor == "") {

            //   this.submitBtn = false;

            // } else if (data.LMCA[i].CurrentAppraisedValue == "") {

            //   this.submitBtn = false;

            // }else{
            //   this.submitBtn = true;
            // }
            
            break;
          }
        }
        console.log(this.dataValue);
      }), (error => {
        console.log(error);
      });
  }

  // getMissingDetails() {
  //   this.userGetEquityService.getEquityAnalysisFullDetails()
  //     .subscribe(data => {
  //       for (let i = 0; i < data.LMCA.length; i++) {
  //         if (data.LMCA[i].ModelRun == this.userEquityAnalysis['ModelRun'] && data.LMCA[i].CCLoanNumber == this.userEquityAnalysis['CCLoanNumber']) {
  //           this.dataValue = data.LMCA[i];
  //           break;
  //         }
  //       }
  //     }), (error => {
  //       console.log(error);
  //     });
  // }

  onSubmit() {
    this.submitTrue = true;

    this.userGetEquityService.getEquityAnalysisDetails()
      .subscribe(data => {
        for (let i = 0; i < data.EAD.length; i++) {
          if (data.EAD[i].ModelRun == this.userEquityAnalysis['ModelRun'] && data.EAD[i].CCLoanNumber == this.userEquityAnalysis['CCLoanNumber']) {
            this.dataValueDetails = data.EAD[i];
          }
        }
      }), (error => {
        console.log(error);
      });
  }
  onReset() {
    this.retriveTrue = false;
    this.submitTrue = false;
    this._equityAnalysisForm.reset();
  }
  onSignOut() {
    this.router.navigateByUrl('/login');

  }

  ngOnInit() {
    
  }
}
