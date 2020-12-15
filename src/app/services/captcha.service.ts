import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CaptchaService {


  public FONTBASE = 200;
  public FONTSIZE = 35;

  constructor() {

  }

  relativeFont(width) {
    const ratio = this.FONTSIZE / this.FONTBASE;
    const size = width * ratio;
    return `${size}px serif`;
  }

  arbitraryRandom(min, max) {

    return Math.random() * (max - min) + min;

  }

  randomRotation(degrees = 10) {
    return (this.arbitraryRandom(-degrees, degrees) * Math.PI) / 180;
  }

  alternateCapitals(str) {

    return [...str].map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]()).join("");

  }

  randomText() {
    return this.alternateCapitals(
      Math.random()
      .toString(36)
      .substring(2, 8)
    );
  }

  createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.height = height;
    canvas.width = width;

    return canvas;
  }

  generate(width, height) {
    const canvas = this.createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.rotate(this.randomRotation());
    const text = this.configureText(ctx, width, height);
    return {
      image: canvas.toDataURL(),
      text: text
    };
  }

  configureText(ctx, width, height) {
    ctx.font = this.relativeFont(width);
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    const text = this.randomText();
    ctx.fillText(text, width / 2, height / 2);
    return text;
  }

}
