import type { Expense } from "../types";
import {LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions } from 'react-swipeable-list'
import { formatDate } from "../helpers"
import AmountDisplay from "./AmountDisplay";
import { useMemo } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import 'react-swipeable-list/dist/styles.css';

type ExpenseDetailProps = {

  expense: Expense;
}

export default function ExpenseDetail({ expense } : ExpenseDetailProps) {

  const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0] , [expense])  

  const { dispatch } = useBudget();

  // Parte visual cuando se deslia en la pantalla
  const leadingActions = () => (
      <LeadingActions>
        <SwipeAction 
          onClick={() =>  dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })}
        >
          Editar
        </SwipeAction>
      </LeadingActions>
  )

  const trailingActions = () => (
      <TrailingActions>
        <SwipeAction  
          onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}
          destructive={true}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
  )

  return (

    <SwipeableList>
      <SwipeableListItem
        maxSwipe={0.6}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg p-5 w-full border-b border-gray-200 flex gap-5 items-center ">

          <div>
            <img 
              src={`/icon_${categoryInfo.icon}.svg`} 
              alt="Icono de Gasto"
              className="w-20 h-20 object-contain"
              loading="lazy"
            />
          </div>{/* fin del div */}

        
          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">
              {categoryInfo.name}
            </p>

            <p>
              {expense.expenseName}
            </p>

            <p className="test-slate-600 text-sm">
              { formatDate( expense.date!.toString() )}  
            </p>

          </div>{/* fin del div */}

          {/* cantidad */}
          <AmountDisplay      
            amount={expense.amount}
          />

          </div>
          
        </SwipeableListItem>    
      </SwipeableList>
  )
}
