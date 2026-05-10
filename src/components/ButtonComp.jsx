
export default function ButtonComp({ text, styling }) {
    return (
        <>
            <button className={styling}>
                {text}
            </button>
        </>
    )
}