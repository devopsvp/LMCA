import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/Http';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EquityAnalysisService {

  constructor(private http: Http) { }

  getEquityAnalysisMissingDetails() {
    return this.http.get('./assets/data/EquityAnalysisMissingData.json').map((res: Response) => res.json()).catch((error: Response | any) => error.json());
  }

  // getEquityAnalysisFullDetails() {
  //   return this.http.get('./assets/data/EquityAnalysisFullData.json').map((res: Response) => res.json()).catch((error: Response | any) => error.json())
  // }

  getEquityAnalysisDetails() {
    return this.http.get('./assets/data/EquityAnalysisDetails.json').map((res: Response) => res.json()).catch((error: Response | any) => error.json());
  }
}
