import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient:HttpClient) { }

  getQuestionsData():Observable<any> {
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1363194665830113280');
  }
}
