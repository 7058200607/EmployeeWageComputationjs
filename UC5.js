console.log("Welcome to Employee Wage Calculator")
let EmpCheck=Math.floor(Math.random()*3);
let EmpHrs=0;
let EmpWage=0;
let isPartTime=0;
let isFullTime=1;
let isAbsent=2;
let EmpWagePerHrs=20;
let NumOfWorkingDays=20;
let TotalEmpWage=0;
for (let Day=0;Day<=NumOfWorkingDays;Day++)
{
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
    
}
EmpWage=EmpWagePerHrs*EmpHrs*NumOfWorkingDays;
console.log(EmpWage)
TotalEmpWage=+EmpWage;
console.log(TotalEmpWage)
