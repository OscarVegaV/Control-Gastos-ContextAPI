import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import 'react-circular-progressbar/dist/styles.css';


export default function BudgetTracker() {
  const { state, totalExpenses, remainingBudget, dispatch  } = useBudget();  

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2) || 0; 
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <CircularProgressbar 
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage === 100 ? '#ef4444' : '#3b82f6',
                    textColor: percentage === 100 ? '#ef4444' : '#3b82f6',
                    trailColor: '#F5F5F5',
                    textSize: 8,
                    
                    pathTransitionDuration: 0.5,
                     
                })}
                text={`${percentage}% Gastado`}

            />
        </div>


        <div className="flex flex-col justify-center items-center gap-8">
            <button 
                onClick={() => dispatch({ type: 'reset-app' })}
                className="bg-pink-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase transition-colors rounded-lg"
            >
                Resetear App
            </button>
            <AmountDisplay 
                label="Presupuesto"
                amount={state.budget } // Example amount, replace with actual budget state
            />
            <AmountDisplay 
                label="Disponible"
                amount={remainingBudget} // Example amount, replace with actual budget state
            />
            <AmountDisplay 
                label="Gastado"
                amount={totalExpenses} // Example amount, replace with actual budget state
            />
        </div>
    </div>

    
  )
}
