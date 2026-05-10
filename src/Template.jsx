import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
export default function Template(){
    return(
        <>
            <NavBar/>
            {/* Menentukan tempat untuk konten dinamis */}
            <Outlet/>
        </>
    )
}