#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is not a positive integer, create an empty object
        Object.assign(this, {});
      }
    }
  
    print() {
      // Print the rectangle using the character 'X'
      if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  
    rotate() {
      // Exchange the width and height of the rectangle
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Multiply the width and height of the rectangle by 2
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;  