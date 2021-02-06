import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data: any;
  noOfBags: any;
  checkInResponse: any;

  constructor(private route: ActivatedRoute, private service: DataService,
    private router: Router) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getReservation(id).subscribe((Response: any) => {
      this.data = Response;
    });
  }

  public checkin(noOfBags: any) {
    let checkInRequest: any = new Object();
    checkInRequest.id = this.data.id;
    checkInRequest.checkedIn = true;
    checkInRequest.numberOfBags = noOfBags;
    this.service.checkin(checkInRequest).subscribe((Response: any) => {
      this.checkInResponse = Response;
    });
    this.router.navigate(['/confirm']);
  }

}
