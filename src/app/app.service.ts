import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {API_URL, PATIENT_URL, PATIENTS_URL, PROVIDE} from "./utils/constants";

@Injectable({
  providedIn: PROVIDE
})

export class AppService {

  constructor(private http: HttpClient) {
  }

  rootURL = API_URL;

  getPatients() {
    return this.http.get(this.rootURL + PATIENTS_URL);
  }

  addPatient(patient: any, id: number) {
    patient.id = id;
    return this.http.post(this.rootURL + PATIENT_URL, patient);
  }
}
