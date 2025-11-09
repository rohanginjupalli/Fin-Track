import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  title: string;
  category: string;
  amount: number;
  type: string;
  date: string;
};

interface ModalProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setShowForm }: ModalProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    setShowForm(false);
  };

  

  const handleBackdropClick = () => setShowForm(false);
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        onClick={stopPropagation}
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-6 relative"
      >
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-gray-800">Add Transaction</h2>
        <p className="text-sm text-gray-500 mb-5">Fill in the details to record a new transaction.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="text" {...register("title")} placeholder="Title" className="w-full border rounded-lg p-2" required />
          <input type="text" {...register("category")} placeholder="Category" className="w-full border rounded-lg p-2" required />
          <input type="number" {...register("amount")} placeholder="Amount" className="w-full border rounded-lg p-2" required />
          <select {...register("type")} className="w-full border rounded-lg p-2" required>
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input type="date" {...register("date")} className="w-full border rounded-lg p-2" required />

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
