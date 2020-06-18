import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.css']
})
export class FormaddComponent implements OnInit {

  user:any = {};
  exampleModal:any;

   constructor() { }

   ngOnInit(): void {

     this.exampleModal = document.getElementById('exampleModal');

     this.exampleModal.addEventListener('show.bs.modal', (event:any) => {
       // Button that triggered the modal
       let button = event.relatedTarget
       // Extract info from data-* attributes
       let recipient = button.getAttribute('data-whatever')
       // Iletf necessary, you could initiate an AJAX request here
       // and then do the updating in a callback.
       //
       // Update the modal's content.
       let modalTitle = this.exampleModal.querySelector('.modal-title')
       //let modalBodyInput:any = exampleModal.querySelector('#name')

       modalTitle.textContent = 'New message to ' + recipient
       //modalBodyInput.value = recipient
       this.user.name = recipient;

     });

   }

   onSubmit(){
     console.log(this.user);


     this.exampleModal = document.getElementById('exampleModal');

     this.exampleModal.close();


 }



}
