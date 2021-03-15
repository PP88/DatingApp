import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.css'],
})
export class UserPhotosComponent implements OnInit, OnDestroy {
  @ViewChild('images') images: ElementRef;
  photos: string[] = [];
  photosInView: string[] = [];
  selectedPhoto: string = '';
  selectedIndex: number = -1;
  startIndex: number = -1;
  endIndex: number = -1;
  elementWidth: number = 100;
  constructor() {}

  ngOnInit(): void {
    this._resetScrolling();
    this.photos.push(
      'https://images.unsplash.com/photo-1578452496128-ab2d0703a8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    );
    this.photos.push(
      'https://images.unsplash.com/photo-1578965706378-12c8a0c4ede9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    );
    this.photos.push(
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80'
    );
    this.photos.push(
      'https://images.unsplash.com/photo-1519699391638-2c1858ed0a8b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
    );
    this.photos.push(
      'https://images.unsplash.com/photo-1578452496128-ab2d0703a8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    );
    this.photos.push(
      'https://images.unsplash.com/photo-1578452496128-ab2d0703a8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    );
    this.photos.push(
      'https://images.unsplash.com/photo-1578452496128-ab2d0703a8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    );
    this.selectedPhoto = this.photos[1];
    this.selectedIndex = 1;
  }

  selectPhoto(event: any) {
    console.log(event);
    console.log(event.target.id);
    this.selectedIndex = event.target.id;
    this.selectedPhoto = this.photos[event.target.id];
  }

  buttonClick(leftOrRight: string) {
    console.log(this.images.nativeElement);
    console.log(this.images.nativeElement.scrollLeft);
    let scrollAmount = 0;
    if (leftOrRight === 'left') {
      scrollAmount = 100;
    } else {
      scrollAmount = -100;
    }
    this.images.nativeElement.scrollLeft += scrollAmount;
  }

  private _resetScrolling() {
    if (this.images && this.images.nativeElement) {
      // this.images.nativeElement.scrollLeft = 0;

      let scrollLeft = this.images.nativeElement.scrollLeft;
      let width = this.images.nativeElement.clientWidth;
      this.startIndex = Math.floor(scrollLeft / this.elementWidth);
      this.endIndex = Math.ceil((scrollLeft + width) / this.elementWidth);
      if (this.photos) {
        this.photosInView = this.photos.slice(this.startIndex, this.endIndex);
      }
    }
  }

  ngOnDestroy() {
    this._resetScrolling();
  }
}
