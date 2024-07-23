export const userTypeValidator = (userType:string) =>{
    
    if(userType.toUpperCase() == "PRESTADOR" || userType.toUpperCase() == "CLIENTE") return true;
    return false
}