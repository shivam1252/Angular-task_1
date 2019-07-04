import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  function (input : string) : void{

    alert("I am function in service ");

  } 

}
