import React, {useState} from 'react';
import { useDataProvider } from 'react-admin';
import {Loading, Error } from 'react-admin';
import {useEffect } from 'react';
import BootStrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Modal, Button} from 'react-bootstrap';

const Pagination = () => {
    const dataProvider = useDataProvider();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const getUserData = async () => {
        try {
            const data = dataProvider.getList('users');
            setUsers(data.data);
            setLoading(false);
        } catch (e) {
            setError(error);
            setLoading(false);
            return <Error/>
        }

        // dataProvider.getList('users')
        //     .then(({ data }) => {
        //         setUsers(data);
        //         setLoading(false);
        //     })
        //     .catch(error => {
        //         setError(error);
        //         setLoading(false);
        //     })
    };

    useEffect(() => {
        getUserData();
    }, [])

    const columns = [
        {dataField: 'name', text: 'Applicant Name'}
    ];

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <div style = {{float: 'left', height: '400px', width: '750px', padding: '10px'}}>
            <h1>Pending Applications</h1>
            <BootStrapTable 
            keyField = 'name'
            data = {users}
            columns = {columns}
            pagination = {paginationFactory()}
            />
        </div>
    );
};

export default Pagination;