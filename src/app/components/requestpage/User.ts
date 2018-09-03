export class  User {
  FName: string;
  LName: string;
  Code: number;
  Phone:number;
  Address:string;

  constructor(fname:string, lname: string, code: number, phone: number, addres: string) {
    this.FName = fname;
    this.LName = lname;
    this.Code = code;
    this.Phone = phone;
    this.Address = addres;
  }

}
