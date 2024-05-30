class Department {
    constructor(private id: string, public name: string){}

    describe(text: string = 'department is engineering art'){
        console.log(text);
    }
} 
const department2 = new Department('ksk', 'james');
console.log(department2);

class ItDepartment extends Department {
    admins: string[];
  constructor(id: string, admins: string[]){
    super(id, 'IT');
    this.admins = admins;   
    }
}
const itDepartment = new ItDepartment('23232', ['it', 'keyjey']);
console.log(itDepartment); 

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting'); 
        }
        addReport(text: string){
      this.reports.push(text);
        }
        showReports(){
            console.log(this.reports);
        }
}

const accountingDp = new AccountingDepartment('2', []);
console.log(accountingDp);

accountingDp.addReport('Something went wrong...')
accountingDp.showReports(); 
