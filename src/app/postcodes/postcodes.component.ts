import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PoscodesService } from './services/poscodes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postcodes',
  templateUrl: './postcodes.component.html',
  styleUrls: ['./postcodes.component.scss']
})
export class PostcodesComponent implements OnInit, OnDestroy {

  constructor(private poscodesService: PoscodesService) { }

  public searchControl = new FormControl('');

  public postcodes: string[];

  public postcode: string;

  public latitude: number = 51.678418;
  public longitude: number = 7.809007;


  subscription: Subscription;
  unsubscribe: Subscription = new Subscription();


  lookupPostcode(poscode) {
    this.unsubscribe.add(this.poscodesService.postcode(poscode)
      .subscribe(
        res => {
          this.latitude = res['result'].latitude;
          this.longitude = res['result'].longitude;
        },
        err => console.log('ERROR!:', err)
      ));
  }

  ngOnInit() {
    this.unsubscribe.add(this.searchControl
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(search => this.poscodesService.postcodeAutocomplete(search)))
      .subscribe(
        res => this.postcodes = res,
        err => console.log('ERROR!:', err)))


  }


  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe;
  }

}
