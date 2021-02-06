import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {
  
  reservationId: number | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(id: any) {
    this.router.navigate(['/checkin', id]);
  }

}
