import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  buildImageSrc,
  buildInputFile,
  execute,
  getInputFilesFromHtmlInputElement,
  loadImageElement,
  MagickInputFile,
} from 'wasm-imagemagick';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  public files: MagickInputFile[] = [];
  public fileNames: string[] = [];
  public convertedImage: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
  async fileChanged(e: any) {
    this.files = await getInputFilesFromHtmlInputElement(e.target);
    this.fileNames = [e.target.files[0].name];
    // console.log(this.file);
  }
  async test() {
    // let fileReader = new FileReader();
    // fileReader.onload = async (e) => {
    //   let test = this.file as MagickInputFile;
    // console.log(fileReader.result);
    const result = await execute({
      inputFiles: this.files,
      commands: [
        `convert ${this.fileNames[0]} -rotate 70 image2.jpeg`,
        // `convert image1.png -rotate 70 image2.gif`,
        // heads up: the next command uses 'image2.gif' which was the output of previous command:
        // 'convert image2.gif -scale 23% image3.jpg',
      ],
      // });
      // };
      // fileReader.readAsText(this.target);
    });
    console.log(result.exitCode);
    if (result.exitCode == 0) {
      if (result.exitCode == 0) {
        // this.convertedImage = await buildImageSrc(result.outputFiles[0]);
        this.convertedImage = this.sanitizer.bypassSecurityTrustResourceUrl(
          URL.createObjectURL(result.outputFiles[0].blob)
        );
        // await loadImageElement(
        //   outputFiles[0],
        //   document.getElementById('outputImage')
        // );
      } else {
      }
    }
  }
}
