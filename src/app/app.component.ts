import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'videoQuestion';

  @ViewChild('videoEl', { static: true }) private videoElRef: ElementRef;
  
  isShown: boolean = false ;
  elem = document.documentElement;
  questiondiv:any = false;
  startdiv:any = true;
  
 
  constructor() {}

get video(): HTMLVideoElement {
    return this.videoElRef.nativeElement;
  }

fullscreen()
{
  
 if(this.elem.requestFullscreen)
  {
    this.elem.requestFullscreen();
   this.questiondiv = true;
   this.startdiv = false;
   this.video.play();
   
  }
}

Exitfullscreen()
  {
    if (document.exitFullscreen)
    {
      document.exitFullscreen();
      this.questiondiv = false;
      this.startdiv = true;
      
    }
  }

  ngOnInit() {
    this.showcontent();
    this.video.play();
  }

  

 myFunction() {
   
  if (this.video.paused) {
    alert();
    this.isShown = false;
    this.video.play();
    this.showcontent();
    
  } 
}

  showcontent() {
    setTimeout(() => {
      this.isShown = true;
    }, 14000);
  }

}
