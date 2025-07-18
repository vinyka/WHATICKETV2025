import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import SendMail from "../services/ForgotPassWordServices/SendMail";
import ResetPassword from "../services/ResetPasswordService/ResetPassword";
type IndexQuery = { email?: string; token?: string; password?: string };
export const store = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.params as IndexQuery;
  const TokenSenha = uuid();
  const forgotPassword = await SendMail(email, TokenSenha);
  if (!forgotPassword) {
     return res.status(200).json({ message: "E-mail enviado exitosamente" });
  }
  return res.status(404).json({ error: "E-mail enviado exitosamente" });
};
export const resetPasswords = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, token, password } = req.params as IndexQuery;
  const resetPassword = await ResetPassword(email, token, password);
  if (!resetPassword) {
    return res.status(200).json({ message: "Restablecimiento de contraseña exitoso" });
  }
  return res.status(404).json({ error: "Verifique el token proporcionado" });
};
