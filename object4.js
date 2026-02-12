let sttudent1={
    name:"Sakshi",
    mobile:585665,
}

let student2={
    name:"Gogi",
    mobile:554354,
}

let printstudent={
    display:function(a="abc",b=0){
        console.log(this.mobile,a,b);
    }
}

//IN CALL METHOD WE NEED TO SEPARETE BY COMMAA
printstudent.display.call(sttudent1,"MET BHUJBAL KNOWLEDGE CITY",123)
printstudent.display.call(student2,"ASC OZAR COLLEGE",999)

//IN APPLY METHOD WE NEED TO USE ARRAY
printstudent.display.apply(sttudent1,["MET INSTITUTE OF ENGINEERING", 455])


//
let x=printstudent.display.bind(sttudent1,"DY PATIL COLLEGE OF ENGINEERING",435)
x()



//
let emp1={
    name:"DEVASHISH",
    salary:15000000,
}
let emp2={
    name:"SAKSHI",
    salary:2500000,

}

let calculateTotalSalary={
    displaySalary:function(bonus){
        let total=this.salary+bonus
        console.log(`Total Salary for ${this.name} is ${total}`);
    }
}
calculateTotalSalary.displaySalary.call(emp1,5000)

