import { formatCurrency, getCurrencyByLocale } from "../helpers"

type AmountDisplayProps = {
    label?: string
    amount: number
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  const userLocale = navigator.language || 'en-US';  // Detecta el locale del navegador
  // const userLocale = 'es-CR'; // forzar para prueba en colones
  const userCurrency = getCurrencyByLocale(userLocale); // Obtiene la moneda para ese locale

  return (
    <p className="text-2xl text-blue-600 font-bold text-center">
        
        {label && `${label}: `}
        <span className="font-black text-black">
           {formatCurrency(amount, userLocale, userCurrency)}
        </span>

    </p>
  )
}
