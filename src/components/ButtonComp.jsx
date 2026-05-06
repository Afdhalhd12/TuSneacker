import { Button } from "flowbite-react";
export default function ButtonComp({text, warna}) {
    return (
        <>
            <Button color={warna}>{text}</Button>
        </>
    )
}