import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable, pipe } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private ref: AngularFireStorageReference;
  private task: AngularFireUploadTask;
  progress$: Observable<number> = new Observable();
  downloadURL$: Observable<string> = new Observable();

  constructor(private fireStorage: AngularFireStorage) {}

  uploadImage(fileToUpload: File) {
    let id = Math.random().toString().substring(2);
    this.ref = this.fireStorage.ref(id);
    this.task = this.ref.put(fileToUpload);
    this.progress$ = this.task.percentageChanges();
    this.task
        .snapshotChanges()
        .pipe(
        tap(() => {
            this.downloadURL$ = this.ref.getDownloadURL(); 
        }))
        .subscribe();
  }

  deleteImage(downloadURL: string): Promise<any> {
    const deletedItem = this.fireStorage
                            .storage
                            .refFromURL(downloadURL)
                            .delete();
    return deletedItem;
  }
}
