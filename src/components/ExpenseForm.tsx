import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import type { DraftExpense, value } from "../types";
import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";


export default function ExpenseForm() {

	const [expense, setExpense] = useState<DraftExpense>({
		amount: Number.NaN,           // 👈 antes: 0 
		expenseName: '',
		category: '',
		date: new Date()
	});

	const [error, setError] = useState('')
	const [previousAmount, setPreviousAmount] = useState<number>(0);
	const { dispatch, state, remainingBudget } = useBudget()

	useEffect(() => {
			if (state.editingId) {
					const editingExpense = state.expenses.filter(currentExpense => currentExpense.id === state.editingId) [0] 
					setExpense(editingExpense)
					setPreviousAmount(editingExpense.amount)
					
			}
	}, [state.editingId, state.expenses]);


	function handleChange(  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) {
		const { name, value } = e.target;
		setError(''); // 👈 limpia el error al tipear

		if (name === 'amount') {
			const parsed = value === '' ? Number.NaN : +value;
			setExpense(prev => ({ ...prev, amount: parsed }));
		} else {
			setExpense(prev => ({ ...prev, [name]: value }));
		}
	}




	const handleChangeDate = (value : value) => {
		setError('');
		setExpense({
				...expense,
				date: value 
		})
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();

	const nameOk = expense.expenseName.trim().length > 0;
	const categoryOk = expense.category.trim().length > 0;
	const amountOk = Number.isFinite(expense.amount) && expense.amount > 0;
	const dateOk =
		expense.date instanceof Date
		? !isNaN(expense.date.getTime())
		: Boolean(expense.date); // por si DatePicker entrega string o Date

	if (!nameOk || !categoryOk || !amountOk || !dateOk) {
		setError('Todos los campos son obligatorios');
		return;
	}

	// no exceder presupuesto
	if ((expense.amount - previousAmount) > remainingBudget) {
		setError('El monto se excede del presupuesto');
		return;
	}

	// agregar o actualizar
	if (state.editingId) {
		dispatch({
		type: 'update-expense',
		payload: { expense: { id: state.editingId, ...expense } },
		});
	} else {
		dispatch({ type: 'add-expense', payload: { expense } });
	}

	// reset
	setExpense({
		amount: Number.NaN,   // 👈 vuelve a quedar en blanco
		expenseName: '',
		category: '',
		date: new Date(),
	});

	setPreviousAmount(0);
	setError(''); // limpia el error si todo salió bien
	};


	return (
		<form className="space-y-5" onSubmit={handleSubmit}> 

			{/* nuevo Gasto */}
			<legend
				className="uppercase text-center text-2xl font-black border-b-4 border-blue-600 py-2"
			>
				{state.editingId ? 'Editar Gasto' : 'Nuevo Gasto'}  
			</legend>

			{/* error */}
			{error && <ErrorMessage>{error}</ErrorMessage>}

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
						value={expense.expenseName}
						
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
					value={Number.isNaN(expense.amount) ? '' : expense.amount}  // 👈 blanco si NaN
					min={1}                                                      // 👈 evita 0/negativos
					step="any"
					inputMode="decimal"
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
					value={expense.category}
				> 
					<option value="">-- Selecciona una categoria --</option>
					{categories.map(category => (
						<option 
							key={category.id}
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
					htmlFor="date" 
					className="text-xl"
				>
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
				value={ state.editingId ? 'Guardar Cambios' : 'Registrar Gasto' }
			/>            
		</form>
	)
}
