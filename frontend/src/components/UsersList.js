import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" label = 'Street Address' />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" label = 'Company Name'/>
        </Datagrid>
    </List>
)