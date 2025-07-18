import Setting from "../models/Setting";

export const showHubToken = async (): Promise<string | any> => {
  const notificameHubToken = await Setting.findOne({
    where: {
      key: "hubToken"
    }
  });

  if (!notificameHubToken) {
    throw new Error("Error: No se encontró el token del Hub de Notificame.");
  }

  if(notificameHubToken) {
    return notificameHubToken.value;
  }
};