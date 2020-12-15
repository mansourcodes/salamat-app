import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import {
  Plugins,
  Capacitor,
  CameraSource,
  CameraResultType,
} from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @ViewChild('filePicker')
  filePickerRef: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string | File>();
  @Input() showPreview = false;
  selectedImage: string;
  usePicker = false;
  isLoading = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    //   console.log('Mobile:', this.platform.is('mobile'));
    //   console.log('Hybrid:', this.platform.is('hybrid'));
    //   console.log('iOS:', this.platform.is('ios'));
    //   console.log('Android:', this.platform.is('android'));
    //   console.log('Desktop:', this.platform.is('desktop'));
    if (
      (this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }

  onPickImage() {
    this.isLoading = true;
    if (this.usePicker) {
      this.filePickerRef.nativeElement.click();
    } else {
      if (!Capacitor.isPluginAvailable('Camera')) {
        this.filePickerRef.nativeElement.click();
        return;
      }
      Plugins.Camera.getPhoto({
        quality: 50,
        source: CameraSource.Prompt,
        correctOrientation: true,
        // height: 320,
        width: 300,
        resultType: CameraResultType.Base64,
      })
        .then((image) => {
          this.isLoading = false;
          this.selectedImage = image.base64String;
          this.imagePick.emit(image.base64String);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          return false;
        });
    }
  }

  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      this.isLoading = false;
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      this.isLoading = false;
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      this.imagePick.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }

  onDeleteImage() {
    this.isLoading = false;
    this.selectedImage = null;
    this.imagePick.emit(null);
  }
}
