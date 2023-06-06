import { Link } from 'react-router-dom';
import './Sidebar.css'
import { MdDashboardCustomize } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { TbPackages } from 'react-icons/tb'

export default function Sidebar() {
    return (
        <div className='sidebar-container' >
            <div className="container-fluid">
                <div className="sidebar d-flex flex-column align-items-start">
                    <h3 className="link-style text-white text-center my-3">Bonjour Oussama</h3>
                    <Link to="dashboard" className="link-style text-white my-2">
                        <MdDashboardCustomize />  Dashboard
                    </Link>
                    <Link to="users" className=" link-style text-white my-2">
                        <FiUsers />  Users
                    </Link>
                    <Link to="add-user" className=" link-style text-white my-2">
                        <AiOutlineUserSwitch />  Add User
                    </Link>
                    <Link to="products" className="link-style text-white my-2">
                        <TbPackages />  Products
                    </Link>
                    <Link to="add-product" className="link-style text-white my-2">
                        <FiPackage />  Add Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
