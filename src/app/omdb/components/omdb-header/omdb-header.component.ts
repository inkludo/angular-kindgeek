import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omdb-header',
  templateUrl: './omdb-header.component.html',
  styleUrls: ['./omdb-header.component.scss']
})
export class OmdbHeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

}
