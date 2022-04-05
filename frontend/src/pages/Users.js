
// hooks
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { DatePicker, LoadingButton, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import useBoolean from '../hooks/useBoolean';
// components
import Page from '../components/Page';
import { RHFTextField, FormProvider } from '../components/hook-form';
// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('name required'),
  username: Yup.string().required('username required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  phone: Yup.string().required('phone is required'),
});

const defaultValues = {
  username: "",
  name: "",
  email: '',
  password: '',
  phone: "",
  address: "",
  residence: "",
  dob: "",
  role: "Patient",
  office: "",
  qualifications: "",
  bio: ''
};


export default function PageOne() {
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const [role, setRole] = useState()
  const [dob, setDob] = useState()
  const [loading, setLoading] = useBoolean()
  const onSubmit = async (data) => {
    console.log(data);
    setLoading.on()
    data.role = role
  };
  const submit = () => {
    console.log(123);
  }
  const [showModal, setShowModal] = useBoolean(false)
  useEffect(() => {
    const subscription = methods.watch((value, { name, type }) => {
      if (name === "role") {
        setRole(value.role)
      }
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);
  return (
    <Page title="Page One" style={{ height: "100%" }}>
      <Box sx={{
        my: 2,
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <Button onClick={setShowModal.on} variant="contained">Add User</Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

      <Dialog open={showModal} onClose={setShowModal.off}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent sx={{ width: 500 }}>
          <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={2} sx={{
              py: 3
            }} >
              <RHFTextField
                name="role"
                select
                label="Role"
              >
                <MenuItem value="Nurse">
                  Nurse
                </MenuItem>
                <MenuItem value="Patient">
                  Patient
                </MenuItem>
                <MenuItem value="Doctor">
                  Doctor
                </MenuItem>
              </RHFTextField>
              {

                role === "Doctor" ? <>
                  <Stack direction="row" spacing={2}>
                    <RHFTextField name="bio" label="Bio" />
                    <RHFTextField
                      name="password"
                      type="password"
                      label="Password"
                    />
                  </Stack>
                </> : null

              }
              <RHFTextField name="name" label="Name" />
              <RHFTextField name="phone" label="Phone" />
              {
                role === "Nurse" || role === "Doctor" ? <>
                  <RHFTextField name="qualifications" label="Qualifications" />
                  <RHFTextField name="office" label="Office" />
                  <RHFTextField name="email" label="Email address" />
                </> : null
              }
              {
                role === "Patient" ? <>
                  <RHFTextField name="address" label="Address" />
                  <RHFTextField name="residence" label="Residence" />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      name="dob"
                      label="Dob"
                      value={dob}
                      onChange={(newValue) => {
                        setDob(newValue);
                      }}
                      renderInput={(params) => <TextField name='dob' {...params} />}
                    />
                  </LocalizationProvider></> : null
              }
            </Stack>

          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={setShowModal.off}>Cancel</Button>
          <Button onClick={submit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}
