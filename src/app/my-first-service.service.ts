import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstServiceService {
  getMessage(): string {
    return 'This is a message from the service!';
  }
}
