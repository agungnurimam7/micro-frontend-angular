import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  ngOnInit(): void {
    console.log('XXX Hello World');
  }

}
