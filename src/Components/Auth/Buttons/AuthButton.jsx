export default function AuthButton({ content }) {
  return (
    <button
      type="submit"
      className="w-full cursor-pointer p-2 md:p-4 rounded-(--btn-radius) bg-(--btn-color) text-(--secondary-text-color) font-(--text-font-weight) md:text-lg border border-(--btn-color) hover:bg-transparent hover:text-(--btn-color) hover:shadow-[0_0_12px_2px_var(--btn-color)] transition-all duration-300 ease-in-out active:opacity-75"
    >
      {content}
    </button>
  );
}
