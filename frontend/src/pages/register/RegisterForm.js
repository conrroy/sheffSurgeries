import * as Yup from 'yup';
import { useState } from 'react';
// form
import { useForm } from 'react-hook-form';
// @mui
import { Stack, Alert, TextField } from '@mui/material';
import { DatePicker, LoadingButton, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { RootStore } from '../../store';
import useBoolean from '../../hooks/useBoolean';
import { RegisterApi } from '../../api/common';
import { FormProvider, RHFTextField } from '../../components/hook-form';
// ----------------------------------------------------------------------
export default function RegisterForm() {
  const navigate = useNavigate()
  const [loading, setLoading] = useBoolean()
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
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    setLoading.on()
    RegisterApi(data).then(res => {
      toast.success("Register success")
      RootStore.loginSuccess(res)
      navigate('/dashboard/users')
    }).finally(setLoading.off)
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Stack direction="row" spacing={2}>
          <RHFTextField name="username" label="Username" />
          <RHFTextField
            name="password"
            type="password"
            label="Password"
          />
        </Stack>

        <RHFTextField name="name" label="Name" />
        <RHFTextField name="email" label="Email address" />
        <RHFTextField name="phone" label="Phone" />
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            name="dob"
            label="Dob"
            value={dob}
            onChange={(newValue) => {
              setDob(newValue);
            }}
            renderInput={(params) => <TextField name='dob' {...params} />}
          />
        </LocalizationProvider> */}
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
