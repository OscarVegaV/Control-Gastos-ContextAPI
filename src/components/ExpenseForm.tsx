import { useState } from "react";
import type { ChangeEvent } from "react";
import type { DraftExpense, value } from "../types";
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';


export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date: Date()
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountField = ['amount'].includes(name);
        setExpense({
            ...expense,
            [name]: isAmountField ? parseFloat(value) : value
        })
    } 

    const handleChangeDate = (value : value) => {
        setExpense({
            ...expense,
            date: value 
        })
    };

    return (
        <form className="space-y-5">
            <legend
                className="uppercase text-center text-2xl font-black border-b-4 border-blue-600 py-2"
            >
                Nuevo Gasto  
            </legend>

            {/* nombre del gasto */}
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="expenseName" 
                    className="text-xl"
                >
                    Nombre del Gasto:
                </label>

                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto"
                    className="bg-slate-100 p-2"                
                    name="expenseName"
                    onChange={handleChange}
                    
                />
            </div>

               {/* cantidad */}
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount" 
                    className="text-xl"
                >
                    Cantidad:
                </label>

                <input
                    type="number"
                    id="amount"
                    placeholder="Añade el monto del gasto ej. 300"
                    className="bg-slate-100 p-2"                
                    name="amount"
                    onChange={handleChange}
                    
                /> 
            </div>

            {/* Categoria */}
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="category" 
                    className="text-xl"
                >
                    Categoria:
                </label>

                <select                
                    id="category"
                    className="bg-slate-100 p-2"                                
                    name="category"
                    onChange={handleChange}
                > 
                    <option value="">-- Selecciona una categoria --</option>
                        {categories.map(category => (
                        <option key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>            
            </div>
                    
           
            {/* Fecha del gasto */}
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="amount" 
                    className="text-xl">
                    Fecha del Gasto:
                </label>
                <DatePicker
                    className="bg-slate-100 p-2 border-0"
                    value={expense.date}
                    onChange={handleChangeDate}
                />              
            </div>

            <input 
                type="submit" 
                className="bg-blue-600 cursor-pointer w-full py-2 text-white uppercase font-bold rounded-lg  hover:bg-blue-700 transition-colors"
                value={'Registrar Gasto'}
            />            
        </form>
    )
}
