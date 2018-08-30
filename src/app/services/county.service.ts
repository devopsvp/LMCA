import { Injectable } from '@angular/core';
import { State } from '../typescript/state';
import { County } from '../typescript/county';

@Injectable(
  {
  providedIn: 'root'
}
)
export class CountyService {
  getCounties() {
    return [
     new County(1, 'Alabama'),
     new County(2, 'Arkansas'),
     new County(3, 'California')
    ];
  }
   
  getStates() {
   return [
    new State(1, 1, 'Fayette County'),
    new State(2, 1, 'Geneva County'),
    new State(3, 1, 'Mounston County'),
    new State(4, 1, 'Jackson County'),
    new State(5, 1, 'Lamar County'),
    new State(1, 2, 'Pike County'),
    new State(2, 2, 'Randolph County'),
    new State(3, 2, 'Stone County'),
    new State(4, 2, 'Washington County'),
    new State(5, 2, 'Yell County'),
    new State(1, 3, 'Alameda County'),
    new State(2, 3, 'Alpine County'),
    new State(3, 3, 'Amalar County'),
    new State(4, 3, 'Butte County'),
    new State(5, 3, 'Del Norte County'),
    ];
  }
}
