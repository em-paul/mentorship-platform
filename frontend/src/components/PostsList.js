import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    NumberField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter,
    BulkDeleteButton
} from 'react-admin';
import { Fragment } from 'react';
import ResetViewsButton from './BulkActionButtons'

export const PostsList = props => (
    <List
        filters={<PostFilter />}

        {...props}

        bulkActionButtons={<PostBulkActionButtons />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

/* create a bulk button for pairing */
const PostBulkActionButtons = props => (
    <Fragment>
        <ResetViewsButton label="Reset Views" {...props} />
        <BulkDeleteButton {...props} />
    </Fragment>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
)


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search by Title" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

