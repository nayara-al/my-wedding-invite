import { ReactNode } from "react";

interface ToggleProps {
  value: string;
  onChange: () => void;
  children: ReactNode;
}
export default function Toggle({ value, onChange, children }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value}
        className="sr-only peer"
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-400 dark:peer-focus:ring-slate-100 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-200"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {children}
      </span>
    </label>
  );
}
