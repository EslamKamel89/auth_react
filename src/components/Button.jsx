export default function Button({ children, ...props }) {
    return <button
        className="px-4 py-2 font-semibold uppercase rounded text-stone-500 bg-amber-500 hover:bg-amber-600"
        {...props}>{children}</button>
} 