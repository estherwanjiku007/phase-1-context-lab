

 // {  timeInEvents : [""] }
 // {  timeOutEvents :[""]}
function createEmployeeRecord(anArray){ 
    let myObj=
    [
        {firstName :anArray[0]},
        {familyName :anArray[1]},
        {title:anArray[2]},
        {payPerHour:anArray[3]},
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
    //let theArray2=createEmployeeRecord()
    //createEmployeeRecords.call(theArray2,theArray)
//return `${this.firstName} ${this.familyName} ${this.title} ${this.payPerHour} ${line}`
 let theArray2=createEmployeeRecord(theArray)
 return theArray2
}
 //let theArray2=createEmployeeRecord()
//createEmployeeRecords.call(theArray2)
 

/*for(let i=0;i<myObj.length;i++){
    return i
}
let allMyEmployees=[]
allMyEmployees.push(myObj[i])
return allMyEmployees[i]*/
/*const allTheEmployees= theArray.map(function(j){
    return createEmployeeRecord(j)
})*/
//return allTheEmployees




//let allEmployees=createEmployeeRecord.apply(myObj,myObj[1],myObj[2])
//allEmployees(timeInEvents)
//let allEmployees2=createEmployeeRecord.bind(myObj)
//allEmployees2(timeOutEvents)
const  date1 =new Date()
function createTimeInEvent(date){
     
//const myDate=date.getHours()
//const date2=date.getDate()
// const allTheEmployees=createEmployeeRecord(myObj)
return `${this.firstName} ${this.familyName}  ${this.title}
     ${this.payPerHour} ${date} `
    
}
const allTheEmployees=createEmployeeRecord(["Esther","Wanjiku","Software Developer","80"])
const myDate=Date.getHours()
const date2=Date.getDate()
/*const myObj2=[
    {timeIn:`${myDate}`},
    {hour:`${myDate}`},
    {date5:`${date2}`}
]*/
const phrase={
   type:"timeIn",
   hour :Date.getHours(),
   date:Date.getDate()
}
createTimeInEvent.call(allTheEmployees,phrase)

function createTimeOutEvent(date){
//const myObj3={timeOutEvents:`${date4}`}
return `${this.firstName} ${this.familyName}  ${this.title}
     ${this.payPerHour} ${date} `     
}
//const myObj3=[[type ,"timeOut"],[hour,`${myDate}`],[date,`${date2}`]]
const myObj3=createTimeInEvent()
const phrase2={
    type : "TimeOut",
    hour :`${Date.getHours()}`,
    date :`${Date.getDate()}`
}
createTimeOutEvent.apply(myObj3,phrase2)
function hoursWorkedOnDate(date){
const myObj4=createEmployeeRecord(anArray[4])
const myObj5=createEmployeeRecord(anArray[5])
 const hrsElapsed=`${myObj4}`-`${myObj5}`
 return hrsElapsed
 
    }
   /*function hoursWorkedOnDate(Date){
    const myObj6=date1.getDate()
    const myObj7=date1.getDate()
    const hrsWorked=`${myObj6}`-`${myObj7}`
    return hrsWorked
   }
   let myEmployees=[]*/
   function findEmployeeByFirstName(allMyEmployees,name){
    let allCorrectEmployees=allMyEmployees.filter(()=>{
        allMyEmployees===name
        return allCorrectEmployees       
    }
    )
}
const wagesEarnedOnDate=function(date){
   // let amount=0
    let date6=createTimeInEvent.call(phrase[2])
    let date7=createTimeOutEvent.call(phrase2[2])
    let totalDates=date7-date6
    //let hr1=createTimeInEvent.call(phrase[1])
    let hr2=createTimeOutEvent.call(phrase2[1])
    let totalHrs=hoursWorkedOnDate()
while(totalHrs>=1){
    let amount=0
    amount=totalHrs*createEmployeeRecord[5]
return amount
}
}
      /*if(allMyEmployees===name){
         return myObj
   }
   else{
    return "undefined"
   }*/
   
   //findEmployeeByFirstName.call(myObj,`${myObj.firstName}`)

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

