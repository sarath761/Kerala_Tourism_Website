import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { database } from 'src/assets/data/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
getData()
{
  return database
}
}
