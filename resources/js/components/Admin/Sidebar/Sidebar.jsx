import { Link } from 'react-router-dom';
import './Sidebar.css'
import { MdDashboardCustomize } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { FiPackage } from 'react-icons/fi'
import { TbPackages } from 'react-icons/tb'
import { useEffect, useState } from 'react';

export default function Sidebar() {

    const [users, setUsers] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/show');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className='sidebar-container' >
            <div className="container-fluid">
                <div className="sidebar d-flex flex-column align-items-start">
                    <h3 className="link-style text-white text-center my-3">Bonjour <span className='fw-bold' style={{fontSize : '25px',color:'white'}} >{users ? users.prenom : ''}</span></h3>
                    <Link to="dashboard" className="b link-style text-white my-2">
                        <MdDashboardCustomize />  Dashboard
                    </Link>
                    <Link to="users" className="b link-style text-white my-2">
                        <FiUsers />  Users
                    </Link>
                    <Link to="add-user" className="b link-style text-white my-2">
                        <AiOutlineUserSwitch />  Add User
                    </Link>
                    <Link to="products" className="b link-style text-white my-2">
                        <TbPackages />  Products
                    </Link>
                    <Link to="add-product" className="b link-style text-white my-2">
                        <FiPackage />  Add Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
