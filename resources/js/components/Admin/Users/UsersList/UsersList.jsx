import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import './UsersList.css'

export default function UsersList() {

    const [users, setUsers] = useState([]);
    const [currentPage , setCurrentPage] = useState(0);
    const usersPerPage = 7;

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/fetch-users');
            setUsers(response.data);
        } catch (error) {
            console.log('Error fetching users:', error)
        }
    }

//--------------------------------------------------------------------------------
    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    }
    const offset = currentPage * usersPerPage;
    const currentPageUsers = users.slice(offset, offset + usersPerPage)

    return (
        <div>
            <h3 className="text-center my-3 ">𝙻𝚒𝚜𝚝𝚎 𝚍𝚎 𝚕𝚎𝚜 𝚞𝚝𝚒𝚕𝚒𝚜𝚊𝚝𝚎𝚞𝚛𝚜 𝚎𝚝 𝚕𝚎𝚜 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚝𝚎𝚞𝚛𝚜</h3>
            <table className='table' >
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                pageCount={Math.ceil(users.length / usersPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageChange}
                containerClassName='pagination'
                activeClassName='active'
            />
        </div>
    )
}

