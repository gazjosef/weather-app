interface InputProps {
  name: string;
  placeholder: string;
  onInput: any;
}

export default function Input({ name, placeholder, onInput }: InputProps) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full p-[6px] text-xs"
      // value={inputCity}
      onChange={(e) => onInput(e.target.value)}
    />
  );
}
