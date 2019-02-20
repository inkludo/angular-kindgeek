import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postcodes-header',
  templateUrl: './postcodes-header.component.html',
  styleUrls: ['./postcodes-header.component.scss']
})
export class PostcodesHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
