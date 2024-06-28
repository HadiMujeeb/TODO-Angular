
import { Component, inject } from '@angular/core';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
searchControl=new FormControl("");
stateServies=inject(StateService)
ngOnInit(){
  this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
   this.stateServies.searchSubject.next(value||'')
  })
}
}
