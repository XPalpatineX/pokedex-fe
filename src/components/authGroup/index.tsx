import { useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import { Description } from 'components/common/styles';
import { GroupPaper, CustomButton } from './styles';
import { AuthData } from 'data/types/user';

interface IPokemonPagination {
  submitHandler: (data: AuthData) => void,
  label: string,
}

const AuthGroup: React.FC<IPokemonPagination> = ({ submitHandler, label }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<AuthData>({
    mode: 'onBlur',
  });

  const onSubmit = useCallback((data: AuthData) => {
    submitHandler(data)
    reset();
  }, [submitHandler, reset])

  return (
    <GroupPaper elevation={24}>
        <Description>{label}</Description>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField autoFocus id="standard-basic" label="Username" variant="standard" error={Boolean(errors.username)} helperText={errors?.username?.message as string}
            {...register('username', {
              required: 'Required field',
              minLength: {
                value: 2,
                message: 'min 2 symbols'
              },
              maxLength: {
                value: 30,
                message: 'max 30 symbols'
              }
            })}
          />
          <TextField id="standard-basic" label="Password" variant="standard" error={Boolean(errors.password)} helperText={errors?.password?.message as string}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 2,
                message: 'min 2 symbols'
              },
              maxLength: {
                value: 30,
                message: 'max 30 symbols'
              }
            })}
          />
          <CustomButton type="submit" variant="contained" disabled={!isValid}>{label}</CustomButton>
        </form>

    </GroupPaper>
  );
}

export default AuthGroup;
