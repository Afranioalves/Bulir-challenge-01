import { emailValidator } from "../libs/email-validator";
import { NIFValidator } from "../libs/nif-validator";
import { userTypeValidator } from "../libs/user-type-validator";

export const validateUserData = ({ NIF, email, password, userType }: any) => {
    
    if (!emailValidator(email)) throw { status: 400, error: 'Email inválido', message: 'Insira um email válido' };
    
    if (!NIFValidator(NIF)) throw { status: 400, error: 'Formato do NIF inválido', message: 'Insira um NIF no formato válido' };

    if (!userTypeValidator(userType)) throw { status: 400, error: 'Tipo de usuário inválido', message: 'Insira PRESTADOR ou CLIENTE' };
    
    if (password.length < 8) throw { status: 400, error: 'Password curta demais', message: 'A password deve ter no mínimo 8 caracteres' };
    
  }