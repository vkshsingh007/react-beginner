interface Expence {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expence[];
  onDelete: (id: number) => void;
}

export const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expanse) => (
          <tr key={expanse.id}>
            <td>{expanse.description}</td>
            <td>{expanse.amount}</td>
            <td>{expanse.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expanse.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
