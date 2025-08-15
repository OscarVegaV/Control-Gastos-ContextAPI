// export function formatCurrency(amount: number){
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//     }).format(amount)
// }

// moneda a mostrar
export function formatCurrency(
  amount: number,
  locale: string = navigator.language || 'en-US', // Detecta locale del navegador por defecto
  currency: string = 'USD' // Valor por defecto
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

const currencyByLocale: Record<string, string> = {
  'es-CR': 'CRC',
  'en-US': 'USD',
  'es-MX': 'MXN',
  'en-GB': 'GBP',
  'fr-FR': 'EUR',
  // Agrega los que necesites
};

export function getCurrencyByLocale(locale: string): string {
  // Retorna la moneda correspondiente o USD si no está en el diccionario
  return currencyByLocale[locale] || 'USD';
}


// fecha
export function formatDate(dateStr: string) : string {
    const dateObj = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
    
}