class FormatMask {
  // Este método ya no aplicará ningún formato, solo devolverá el número como fue ingresado
  setPhoneFormatMask(phoneToFormat) {
    return phoneToFormat; // Devolver el número sin modificarlo
  }

  // Este método sigue eliminando cualquier carácter que no sea un dígito (si lo necesitas)
  removeMask(number) {
    const filterNumber = number.replace(/\D/g, "");
    return filterNumber;
  }

  // Método maskPhonePattern eliminado porque ya no es necesario
}

export { FormatMask };
