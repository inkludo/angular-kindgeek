import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-header',
  templateUrl: './google-map-header.component.html',
  styleUrls: ['./google-map-header.component.scss']
})
export class GoogleMapHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
