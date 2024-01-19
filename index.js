
let myObj=
[
    {firstName :""},
    {familyName :""},
    {title:""},
    {payPerHour:""}
]
 // {  timeInEvents : [""] }
 // {  timeOutEvents :[""]}
function createEmployeeRecord([anArray]){ 
    let myObj=
    [
        {firstName :anArray[0]},
        {familyName :anArray[1]},
        {title:[2]},
        {payPerHour:[3]},
        {timeInEvents:""},
        {timeOutEvents:""}
    ]
    return myObj
    
  //  return `${myObj.firstName} ${myObj.familyName}  ${myObj.title}
  //   ${myObj.payPerHour} ${phrase}` 
     //const phrase=    
}
createEmployeeRecord()



/*employee2(timeInEvents)
let employee3=createEmployeeRecord.bind(myObj)
employee3(timeOutEvents)*/
function createEmployeeRecords(theArray){
//return `${this.firstName} ${this.familyName} ${this.title} ${this.payPerHour} ${line}`
createEmployeeRecord(myObj)

/*for(let i=0;i<myObj.length;i++){
    return i
}
let allMyEmployees=[]
allMyEmployees.push(myObj[i])
return allMyEmployees[i]*/
return theArray.map(function(q){
    return createEmployeeRecord(q)
    
})
}



//let allEmployees=createEmployeeRecord.apply(myObj,myObj[1],myObj[2])
//allEmployees(timeInEvents)
//let allEmployees2=createEmployeeRecord.bind(myObj)
//allEmployees2(timeOutEvents)
const date1 =new Date()
function createTimeInEvent(date){   
//const myDate=date.getHours()
//const date2=date.getDate()
return `${this.firstName} ${this.familyName}  ${this.title}
     ${this.payPerHour} ${date} `
    
}
const myDate=date1.getHours()
const date2=date1.getDate()
/*const myObj2=[
    {timeIn:`${myDate}`},
    {hour:`${myDate}`},
    {date5:`${date2}`}
]*/
phrase[0]=`${myDate}`
createTimeInEvent.call(myObj,phrase[0])

function createTimeOutEvent(date){
//const myObj3={timeOutEvents:`${date4}`}
return `${this.firstName} ${this.familyName}  ${this.title}
     ${this.payPerHour} ${date} `     
}
//const myObj3=[[type ,"timeOut"],[hour,`${myDate}`],[date,`${date2}`]]
phrase[1]=`${myDate}`
createTimeOutEvent.call(myObj,phrase[1])
function hoursWorkedOnDate(date1){
const myObj4=phrase[1]
const myObj5=phrase[0]
 const hrsElapsed=`${myObj4}`-`${myObj5}`
 return hrsElapsed
    }
   function hoursWorkedOnDate(date){
    const myObj6=date1.getDate()
    const myObj7=date1.getDate()
    const hrsWorked=`${myObj6}`-`${myObj7}`
    return hrsWorked
   }
   let myEmployees=[]
   function findEmployeeByFirstName(name){
      if(`${this.firstName===name}`){
         return myObj
   }
   else{
    return "undefined"
   }
   }
   findEmployeeByFirstName.call(myObj,`${myObj.firstName}`)

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

