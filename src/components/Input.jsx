export const Input = ({ type = 'text', placeholder, value, onChange, name }) => {
    return (
        <input
            className="focus:scale-105 focus:translate-x-2 scale-95 focus:translate-y-2 bg-transparent text-slate-300 p-3 border-emerald-800 transition border outline-none rounded focus:border-emerald-400"
            type={type} 
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            required
        />
    );
};