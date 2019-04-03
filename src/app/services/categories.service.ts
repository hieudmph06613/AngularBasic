import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {cateType} from '../model/cateType';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private urlApi = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/category';

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<cateType[]> {
        return this.http.get<cateType[]>(this.urlApi);
    }
}
