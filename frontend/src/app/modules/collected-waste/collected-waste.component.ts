import { Component, OnInit } from '@angular/core';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { Observable } from 'rxjs';
import { CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import { Router } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';

@Component({
  selector: 'app-collected-waste',
  templateUrl: './collected-waste.component.html',
  styleUrls: ['./collected-waste.component.scss'],
})
export class CollectedWasteComponent implements OnInit {
  collectedWastes: Observable<CollectedWaste[]>;
  successMsg: any;
  errorMsg: any;
  constructor(
    private collectedWasteService: CollectedWasteServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.collectedWastes = this.collectedWasteService.getCollectedWasteList();
  }

  deleteCollectedWaste(id: number) {
    this.collectedWasteService.deleteCollectedWaste(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateCollectedWaste(id: number) {
    this.router.navigate(['system', 'UpdateCollectedWastes', id]);
  }

  public openConfirmationDialog(id:number) {
    this.collectedWasteService.confirm('Please confirm..', 'Do you really want to delete?')
    .then((confirmed) => {
          // console.log('User confirmed:', confirmed);
          if(confirmed==true){
            this.deleteCollectedWaste(id);
          }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
