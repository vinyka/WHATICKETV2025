import User from "../models/User";
import Whatsapp from "../models/Whatsapp";
import { logger } from "../utils/logger";

const GetDefaultWhatsAppByUser = async (
  userId: number
): Promise<Whatsapp | null> => {
  const user = await User.findByPk(userId, {include: ["whatsapp"]});
  if( user === null || !user.whatsapp) {
    return null;
  }

  logger.info(`Se encontró WhatsApp vinculado al usuario. '${user.name}' es '${user.whatsapp.name}'.`);

  return user.whatsapp;
};

export default GetDefaultWhatsAppByUser;
