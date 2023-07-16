import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";
import { useState } from "react";
import { ExponseForm } from "./expense-tracker/components/ExponseForm";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpense] = useState([
    { id: 1, description: "cake", amount: 10, category: "Entertainment" },
    { id: 2, description: "fruit", amount: 70, category: "Utilities" },
    { id: 3, description: "roti", amount: 50, category: "Groceries" },
    { id: 4, description: "sprite", amount: 20, category: "Utilities" },
  ]);

  const visibleExpense = selectedCategory
    ? expense.filter((c) => c.category === selectedCategory)
    : expense;

  return (
    <>
      <div className="mb-5">
        <ExponseForm
          onSubmit={(data) =>
            setExpense([...expense, { ...data, id: expense.length + 1 }])
          }
        ></ExponseForm>
      </div>
      <ExpenseFilter
        onSelectCAtegory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(data) => setExpense(expense.filter((e) => e.id != data))}
      ></ExpenseList>
    </>
  );
}

export default App;
