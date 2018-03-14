import { Component, OnInit } from '@angular/core';
import {MediaService} from "../services/media.service";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  mediaArray: any;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getNewFiles().subscribe(
      data => {
        console.log(data);
        this.mediaArray = data;
        this.mediaArray.map(media => {
          media.thumbnail = media.filename;
        });
        console.log(this.mediaArray);
      }
    );
  }
}
