import { Component, TemplateRef, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements AfterViewInit {

  @Input('title') public title:string = "Alerta";
  @Input('message') public message:string = "";
  @Output() closing: EventEmitter<any> = new EventEmitter();

  
  @ViewChild('content') public content!: TemplateRef<any>;

  constructor(private modalService: NgbModal){}

  ngAfterViewInit(): void {
    this.open(this.content)
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}

  close(){
    this.closing.emit();
  }

}
