import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// form
import { useForm } from 'react-hook-form';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";
import { FormProvider, RHFTextField, RHFCheckbox } from '../../components/hook-form';
import { LoginApi } from '../../api/common';
import useBoolean from '../../hooks/useBoolean';
import { RootStore } from "../../store";
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navgate = useNavigate()
  const [loading, setLoading] = useBoolean()

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('username is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    setLoading.on()
    const id = toast.loading("Please wait...",)
    data.role = "doctor"
    LoginApi(data).then(res => {
      RootStore.loginSuccess(res)
      setTimeout(() => {
        toast.update(id, { render: "'Login success'", type: "success", isLoading: false, autoClose: 500, onClose: () => navgate('/dashboard/prescription') });
      }, 1000)

    }, () => {
      toast.update(id, { render: "Login failed", type: "error", isLoading: false, autoClose: 500 });
    }).finally(setLoading.off)
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <NavLink to="/login">Receptionist Login </NavLink>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
