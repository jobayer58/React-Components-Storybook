type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition">
      {text}
    </button>
  );
}
