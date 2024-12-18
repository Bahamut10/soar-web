import {
  useAPIGetProfile,
  useAPIPostEditProfile,
} from '@/networks/profile/useAPIProfile';
import { ProfileStruct } from '@/types/profile';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errorMessages = {
  required: 'This field is required',
  invalidPassword:
    'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character (@$!%*?&)',
  invalidEmail: 'Please enter a valid email address',
};

export default function useEditProfile() {
  const browseFileRef = useRef<HTMLInputElement>(null);
  const { data: profileData, isLoading: isProfileLoading } = useAPIGetProfile();

  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  const postEditProfile = useAPIPostEditProfile();
  const { mutateAsync: editProfile } = postEditProfile;

  const profile: ProfileStruct = profileData?.data;

  const yupSchema = useMemo(() => {
    return Yup.object().shape({
      id: Yup.number().required(),
      photo: Yup.mixed<File>().required(),
      name: Yup.string().required(errorMessages.required),
      email: Yup.string()
        .required(errorMessages.required)
        .test('is-email-valid', errorMessages.invalidEmail, (value) =>
          emailRegex.test(value)
        ),
      dateOfBirth: Yup.date().required(errorMessages.required),
      permanentAddress: Yup.string().required(errorMessages.required),
      postalCode: Yup.string().required(errorMessages.required),
      username: Yup.string().required(errorMessages.required),
      password: Yup.string().test(
        'is-empty-or-strong',
        errorMessages.invalidPassword,
        (value) => {
          if (!value || value.trim() === '') {
            return true;
          }

          return strongPasswordRegex.test(value);
        }
      ),
      presentAddress: Yup.string().required(errorMessages.required),
      city: Yup.string().required(errorMessages.required),
      country: Yup.string().required(errorMessages.required),
    });
  }, []);

  const profileForm = useForm({
    resolver: yupResolver(yupSchema),
    mode: 'onChange',
    defaultValues: {},
  });

  const {
    register,
    setValue,
    reset,
    formState: { dirtyFields },
  } = profileForm;

  const onSubmit: SubmitHandler<ProfileStruct> = async (data) => {
    const formData = new FormData();
    let value;

    Object.keys(dirtyFields).forEach((key) => {
      if (key in data) {
        if (key === 'photo') {
          value = data[key] || '';
        } else {
          value = String(data[key] || '');
        }
        formData.append(key, value);
      }
    });

    await editProfile(
      {
        form: formData,
      },
      {
        onSuccess: () => {
          toast.success('Profile successfully updated!');
        },
        onError: () => {
          toast.error('Something went wrong, please try again later!');
        },
      }
    );
  };

  const handleBrowsePhoto = () => browseFileRef?.current?.click();

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setValue('photo', file);
      register('photo').onChange(event);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (profile) {
      reset({
        id: profile?.id || undefined,
        photo: profile?.photo || undefined,
        name: profile?.name || undefined,
        email: profile?.email || undefined,
        dateOfBirth: profile?.dateOfBirth || undefined,
        permanentAddress: profile?.permanentAddress || undefined,
        postalCode: profile?.postalCode || undefined,
        username: profile?.username || undefined,
        password: undefined,
        presentAddress: profile?.presentAddress || undefined,
        city: profile?.city || undefined,
        country: profile?.country || undefined,
      });
    }
  }, [profile, reset]);

  return {
    isProfileLoading,
    profileForm,
    onSubmit,
    handleBrowsePhoto,
    handlePhotoChange,
    browseFileRef,
    postEditProfile,
    previewPhoto,
    profile,
  };
}
