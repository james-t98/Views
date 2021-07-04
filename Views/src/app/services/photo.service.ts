import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
temp: string;
public photos: Photos[] = [];
  constructor() { }

  /**
   * async addNewToGallery
   */
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: this.temp,
      webviewPath: capturedPhoto.webPath
    });
  }
}

export interface Photos {
  filepath: string;
  webviewPath: string;
}
