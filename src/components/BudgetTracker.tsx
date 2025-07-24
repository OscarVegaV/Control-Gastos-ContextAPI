import AmountDisplay from "./AmountDisplay";


export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Gráfica de gastos" />
        </div>


        <div className="flex flex-col justify-center items-center gap-8">
            <button className="bg-pink-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase transition-colors rounded-lg">
                Resetear App
            </button>
            <AmountDisplay 
                label="Presupuesto"
                amount={1000} // Example amount, replace with actual budget state
            />
            <AmountDisplay 
                label="Disponible"
                amount={500} // Example amount, replace with actual budget state
            />
            <AmountDisplay 
                label="Gastado"
                amount={300} // Example amount, replace with actual budget state
            />
        </div>
    </div>

    
  )
}
