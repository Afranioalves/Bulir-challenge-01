export const NIFValidator = (NIF:string) => {
  
    const regex = /^[A-Za-z0-9]{9}[A-Za-z]{2}[0-9]{3}$/;
    if (NIF.length === 14 && regex.test(NIF)) return true;
    if(NIF.length === 10 || NIF.length === 11) return true
    return false
}
