// @mui
import { Box, Button, Container, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Stack, TextField, Paper, IconButton, InputBase, Divider } from '@mui/material';
// hooks
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LoadingButton, LocalizationProvider } from '@mui/lab';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { CreatePre, QueryPre } from '../api/common';
import useBoolean from '../hooks/useBoolean';
// components
import Page from '../components/Page';
import { RHFTextField, FormProvider } from '../components/hook-form';
// ----------------------------------------------------------------------
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name required'),
  number: Yup.string().required('Number required'),
  medicine: Yup.string().required('medicine is required'),
  total: Yup.string().required('total is required'),
  paying: Yup.string().required('paying is required')
});

const defaultValues = {
  name: '',
  number: '',
  medicine: '',
  total: '',
  paying: '',
};
const columns = [
  { field: 'id', headerName: 'ID', width: 90, sortable: false, },
  {
    sortable: false,
    field: 'name',
    headerName: 'Pharmacy name',
    width: 150,
  },
  {
    sortable: false,
    field: 'number',
    headerName: 'Prescrip number',
    width: 150,

  },
  {
    sortable: false,
    field: 'medicine',
    headerName: 'Medicine',
    type: 'number',
    width: 110,
  },
  {
    field: 'total',
    headerName: 'Total cost',
    sortable: false,
    width: 160,
  },
  {
    field: 'paying',
    headerName: 'Paying',
    sortable: false,
    width: 160,
  },
];

export default function PageTwo() {
  const [showModal, setShowModal] = useBoolean()
  const [date, setDate] = useState()
  const [rows, setRows] = useState([])
  const [id, setId] = useState()
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const getRows = (body = {}) => {
    QueryPre(body).then((res) => {
      setRows(res)
    })
  }
  const submit = () => {
    const vlas = methods.getValues()
    methods.trigger().then(vilidate => {
      if (vilidate) {
        CreatePre(Object.assign(vlas, { date })).then(() => {
          toast.success('Success')
          methods.reset()
          setShowModal.off()
        })
      }
    })
  }
  useEffect(getRows, [])
  return (
    <Page title="Prescription">
      <Box sx={{ height: '100%', display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Paper
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, border: "1px solid #eee" }}
            >

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                onInput={(ev) => {
                  setId(ev.target.value)
                }}
                placeholder="Search Prescription"
              />
              <IconButton onClick={() => {
                if (id) {
                  getRows({ id: +id })
                } else {
                  getRows()
                }
              }} sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>

            </Paper>
          </Box>
          <Button onClick={setShowModal.on} variant="contained">Add Prescription</Button>
        </Box>
        <Box sx={{
          flex: 1
        }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
      </Box>

      <Dialog open={showModal} onClose={setShowModal.off}>
        <DialogTitle>Add Prescription</DialogTitle>
        <DialogContent sx={{ width: 500 }}>
          <FormProvider methods={methods}>
            <Stack spacing={2} sx={{
              py: 3
            }} >
              <RHFTextField name="name" label="Pharmacy name" />
              <RHFTextField name="number" label="Prescrip number" />
              <RHFTextField name="medicine" label="Medicine" />
              <RHFTextField name="total" label="Total cost" />
              <RHFTextField name="paying" label="Paying" />
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date issued"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
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
