import { Component, OnInit } from '@angular/core';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-collected-waste',
  templateUrl: './update-collected-waste.component.html',
  styleUrls: ['./update-collected-waste.component.scss']
})
export class UpdateCollectedWasteComponent implements OnInit {

  Types: any = ['Plastic', 'Paper', 'E-Waste'];
  id : number;
  collectedWaste : CollectedWaste;

  constructor(private route: ActivatedRoute,private router: Router, private collectedWasteService: CollectedWasteServiceService ) { }

  successMsg: any;
  errorMsg: any;

  ngOnInit() {
    this.collectedWaste = new CollectedWaste();

    this.id = this.route.snapshot.params['id'];

    this.collectedWasteService.getCollectedWaste(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.collectedWaste = data;
    }, error => console.log(error));
  }

  updateCollectedWaste() {
    this.collectedWasteService.updateCollectedWaste(this.id, this.collectedWaste)
      .subscribe(data => console.log(data),
       error => {console.log(error);this.errorMsg = 'Something went Wrong !!!';});
    this.collectedWaste = new CollectedWaste();
    console.log("testing floaaaat"+this.collectedWaste);
    this.gotoList();
  }

  onSubmit(form:NgForm) {
    
    this.updateCollectedWaste();    
  }
  gotoList(){
    this.router.navigate(['system/collectedWaste']);
  }

}

// testinggggg