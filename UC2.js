console.log("Welcome to Employee Wage Calculator")
let EmpCheck=Math.floor(Math.random()*3);
let EmpHrs=0;
let EmpWage=0;
let isFullTime=1;
let isAbsent=2;
let EmpWagePerHrs=20;
if(EmpCheck==isAbsent)
{
    EmpHrs=0;
}
else
{
    EmpHrs=8;
}
EmpWage=EmpHrs*EmpWagePerHrs
console.log(EmpWage)
