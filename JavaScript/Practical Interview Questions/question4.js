function getnextdate() {
    let date = this.getDate();  // Use getDate() method to get the day of the month
    this.setDate(date + 1);     // Use setDate() method to set the day of the month
    return this;
}

let mydateinstance = new Date();

mydateinstance.getnextdate = getnextdate;

const nextdate = mydateinstance.getnextdate();

console.log("next date is ",nextdate);
