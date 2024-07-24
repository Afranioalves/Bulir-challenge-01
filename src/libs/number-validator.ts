export const numberValidator = (number:any)=>{
    const regex = /^\d+$/;
    if(regex.test(number) &&  typeof +number === "number") return true;
    return false;
   
} 