
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { ProductServiceService } from './product-service.service';
import { HttpClient } from '@angular/common/http';

describe('ProductServiceService', () => {
  let service: ProductServiceService;
let httpMock:HttpClientTestingModule;
let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProductServiceService]
    });


  service = TestBed.inject(ProductServiceService);
  httpMock=TestBed.get(HttpTestingController);
 httpClient=TestBed.inject(HttpClient);
  });


  it('should be created', () => {

    expect(service).toBeTruthy();
   });




});

