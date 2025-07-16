import { authClient } from "./auth-client";

type ErrorTypes = Partial<
	Record<
		keyof typeof authClient.$ERROR_CODES,
		{
			en: string;
			pt_br: string;
		}
	>
>;
 
const errorCodes = {
	USER_ALREADY_EXISTS: {
		en: authClient.$ERROR_CODES.USER_ALREADY_EXISTS,
		pt_br: "Usuário já existe."
	},
  INVALID_EMAIL_OR_PASSWORD: {
    en: authClient.$ERROR_CODES.INVALID_EMAIL_OR_PASSWORD,
    pt_br: "Login ou senha inválidos."
  },
	EMAIL_NOT_VERIFIED: {
		en: authClient.$ERROR_CODES.EMAIL_NOT_VERIFIED,
		pt_br: "Verifique seu e-mail antes de continuar."
	}
  
} satisfies ErrorTypes;
 
export const getErrorMessage = (code: string, lang: "en" | "pt_br" = "pt_br") => {
	if (code in errorCodes) {
		return errorCodes[code as keyof typeof errorCodes][lang];
	}
	return "";
};
