import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";

@Component({
  selector: 'app-rtpcomponent',
  templateUrl: './rtpcomponent.component.html',
  styleUrls: ['./rtpcomponent.component.css']
})
export class RtpcomponentComponent implements OnInit {

  constructor(private service: ProjectService) { }

  ngOnInit() {
  }

  
  }
