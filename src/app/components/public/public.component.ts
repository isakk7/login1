// import { Component, OnInit } from '@angular/core';
// import { YoutubeService } from 'src/app/services/youtube.service';

// declare var $;

// @Component({
//   selector: 'app-public',
//   templateUrl: './public.component.html',
//   styleUrls: ['./public.component.css']
// })
// export class PublicComponent implements OnInit {
//   misVideos:any[]=[];
//   videoId:string;

//   constructor(private _youtube:YoutubeService) {
//     this._youtube.obtenerVideos().subscribe((resp:any)=> {
//       console.log(resp);
//       this.misVideos=resp.items;
//     });
//    }

//   ngOnInit() {
//   }

//   detalleVideo(detalle:string){
//     console.log(detalle);
//     this.videoId=detalle;
//     $('#exampleModal').modal();
//   }

//   cerrarModal(){
//     this.videoId=null;
//     $('#exampleModal').modal('hide');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  misVideos:any[]=[];
  videoId:string;

  constructor(private _youtube:YoutubeService) { 
    
    this._youtube.obtenerVideos().subscribe((resp:any)=> {
      this.misVideos = resp.items;
      console.log(this.misVideos);
  
    });
  }

  ngOnInit() {
  }

  detalleVideo(a:string){
    console.log(a);
    
   this.videoId=a;
   $('#exampleModal').modal();
    
  }

  cerrarModal(){
    this.videoId=null;
    $('#exampleModal').modal('hide');
  }

}


