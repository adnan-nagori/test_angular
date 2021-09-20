import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name = 'Test Form';  
    
  testForm: FormGroup;  
  

  constructor(
    private fb:FormBuilder
  ) { 
    this.testForm = this.fb.group({  
      name: '',  
      adfields: this.fb.array([]) ,  
    });
  }

  ngOnInit(): void {
    
  }

  adfields() : FormArray {  
    return this.testForm.get("adfields") as FormArray  
  } 

  newFields(): FormGroup {  
    return this.fb.group({  
      Address: ''
       
    })  
  }  

  addFields() {  
    this.adfields().push(this.newFields());  
  }  
     
  removeFields(i:number) {  
    this.adfields().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.testForm.value);  
  }  

  
  

}
