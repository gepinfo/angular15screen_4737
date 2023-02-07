import { Component, OnInit } from '@angular/core';
import { CreatescreenService } from './createscreen.service';

@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public ticket:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }

    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
        this.ticket.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.ticket).subscribe((data:any) => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}