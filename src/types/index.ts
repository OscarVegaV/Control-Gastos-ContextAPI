export type Expense = {
  id: string
  expenseName: string
  amount: number
  category: string
  date: string
}

export type DraftExpense = Omit<Expense, 'id'>;



type ValuePiece = Date | null;
export type value = ValuePiece | [ValuePiece, ValuePiece];

export type category = {
  id: string
  name: string
  icon: string
}