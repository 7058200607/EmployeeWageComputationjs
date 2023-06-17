console.log("Welcome to Employee Wage Calculation")
let EmpCheck=Math.floor(Math.random()*3);
let EmpHrs=0;
let EmpWage=0;
let isPartTime=0;
let isFullTime=1;
let isAbsent=2;
let EmpWagePerHrs=20;
switch(EmpCheck)
{
    case isAbsent:
    EmpHrs=0;
    break;
    case isPartTime:
    EmpHrs=4;
    break;
    default:
    EmpHrs=8;
    break;
}
EmpWage=EmpHrs*EmpWagePerHrs
console.log(EmpWage)