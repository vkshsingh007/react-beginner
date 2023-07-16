import categories from "../categories";
interface Props {
  onSelectCAtegory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCAtegory }: Props) => {
  return (
    <select
      className="form-select mb-2"
      onChange={(event) => onSelectCAtegory(event.target.value)}
    >
      <option value="">All Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
