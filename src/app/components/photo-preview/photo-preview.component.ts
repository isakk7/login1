import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {
  id: string;
  photo: Photo;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhotos(this.id)
      .subscribe(
        res => {
          this.photo = res;
        },
        err => console.log(err)
      )

    })

  }
  deletePhoto(id: string){
    this.photoService.deletePhoto(id)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/photos'])
      },
      err => console.log(err)
    )
  }

  updatePhoto(title: HTMLInputElement, age: HTMLTextAreaElement, description: HTMLTextAreaElement): boolean {
    this.photoService.updatePhoto(this.id, title.value, age.value, description.value)
    .subscribe(
      res => {
        this.router.navigate(['/photos'])
      },
      error => console.log(error)
    )
    return false;
  }

}
