"use client"
export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
}

const Checkbox = (props: CheckboxProps) => (
  <div className="relative flex items-center">
    <input
      className="
              peer relative appearance-none shrink-0 w-5 h-5 border border-zinc-400 rounded-[5px] mt-1 bg-white
              focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-zinc-200
              checked:bg-white checked:border-zinc-400
              disabled:border-steel-400 disabled:bg-steel-400
            "
      type="checkbox"
      {...props}
    />
    <svg
      className="absolute top-1/2 -translate-y-[62%] left-[2px] w-4 h-4 pointer-events-none hidden peer-checked:block stroke-black mt-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
);

export default Checkbox;
