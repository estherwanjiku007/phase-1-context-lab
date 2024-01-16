
let myObj=[
    [
    [firstName ,""],
    [familyName ,""],
    [title ,""],
    [payPerHour ,""]
    
    ]
 // {  timeInEvents : [""] }
 // {  timeOutEvents :[""]}
]

function createEmployeeRecord(myObj){ 
    return `${myObj.firstName} ${myObj.familyName}  ${myObj.title}
     ${myObj.payPerHour} ` 
     //const phrase=
     [
        [timeInEvents,""],
        [timeOutEvents,""]
     ]
}
createEmployeeRecord.apply(myObj,phrase)

/*employee2(timeInEvents)
let employee3=createEmployeeRecord.bind(myObj)
employee3(timeOutEvents)*/
function createEmployeeRecords(line){
return `${this.firstName} ${this.familyName} ${this.title} ${this.payPerHour} ${line}`
}
const line2=[
[timeInEvents,""],
[timeOutEvents,""]
]
createEmployeeRecords.bind(myObj)
//let allEmployees=createEmployeeRecord.apply(myObj,myObj[1],myObj[2])
//allEmployees(timeInEvents)
//let allEmployees2=createEmployeeRecord.bind(myObj)
//allEmployees2(timeOutEvents)
const date =new Date()
function createTimeInEvent(date){   
//const myDate=date.getHours()
//const date2=date.getDate()
const myDate=date.getHours()
const date2=date.getDate()
const myObj2=[timeInEvents,`${date2}`]
return `${this.firstName} ${this.familyName}  ${this.title}
     ${this.payPerHour} ${myObj2} `
     
}
const myDate=date.getHours()
const date2=date.getDate()
createTimeInEvent.call(myObj,myObj2)
function createTimeOutEvent(date){
const date3=date.getHours()
const date4=date.getDate()
const myObj3=[timeOutEvents,`${date4}`]
return `${this.firstName} ${this.familyName}  ${this.title}
     ${this.payPerHour} ${myObj3} `  
     
}
createTimeOutEvent.call(myObj,myObj3)
function hoursWorkedOnDate(date){
const myObj4=[timeInEvents,date]
const myObj5=[timeOutEvents,date]
 const hrsElapsed=`${myObj5}`-`${myObj4}`
 return hrsElapsed
    }
   function hoursWorkedOnDate(date){
    const myObj6=[timeInEvents,date]
    const myObj7=[timeOutEvents,date]
    const hrsWorked=`${myObj6}`-`${myObj7}`
    return hrsWorked
   }
   let myEmployees=[]
   function findEmployeeByFirstName(myEmployees,name){
      if(myEmployees===name){
         return `${myObj}`
   }
   else{
    return "undefined"
   }
   }
   findEmployeeByFirstName.bind(myEmployees,`${myObj.firstName}`)
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

