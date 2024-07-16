export const TextArea = ({ placeholder, value, onChange, name }) => {
    return (
        <textarea
            className="focus:scale-105 h-36 resize-none focus:translate-x-2 focus:translate-y-2 scale-95 bg-transparent text-slate-300 p-3 border-emerald-800 transition border outline-none rounded focus:border-emerald-400"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            required
        />
    );
};