import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import { Input } from '@/components/Input';
import Image from 'next/image';

import DatePicker from 'react-datepicker';

import Loading from '@/components/Loading';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { MdEdit } from 'react-icons/md';
import useEditProfile from './useEditProfile';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';

export default function EditProfile() {
  const {
    isProfileLoading,
    profileForm,
    onSubmit,
    handleBrowsePhoto,
    handlePhotoChange,
    browseFileRef,
    postEditProfile,
    previewPhoto,
    profile,
  } = useEditProfile();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = profileForm;
  const { isPending } = postEditProfile;

  if (isProfileLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Profile Form">
      <div
        className="max-laptop:flex-col max-laptop:items-center max-laptop:gap-6 flex gap-16"
        role="group"
        aria-labelledby="profile-photo-label"
      >
        <div
          className="relative h-fit cursor-pointer"
          onClick={handleBrowsePhoto}
          role="button"
          aria-label="Upload Profile Picture"
        >
          <Image
            src={
              previewPhoto || profile?.photo?.toString() || '/user-circle.svg'
            }
            priority={true}
            alt="User Profile Picture"
            width={100}
            height={100}
          />
          <span
            className="bg-charcoal p-2 rounded-full absolute -bottom-1 -right-1"
            role="img"
            aria-label="Edit Profile Picture Icon"
          >
            <MdEdit className="text-white" />
          </span>
          <Input
            {...register('photo')}
            ref={browseFileRef}
            type="file"
            onChange={handlePhotoChange}
            accept="image/*"
            hidden
          />
        </div>
        <div className="max-laptop:flex-col flex-2 flex justify-between w-full gap-7">
          <div className="flex flex-col gap-6 flex-1">
            <Input
              {...register('name')}
              label="Your Name"
              type="text"
              aria-required="true"
              error={errors.name && errors.name.message}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            <Input
              {...register('email')}
              label="Email"
              type="email"
              aria-required="true"
              error={errors.email && errors.email.message}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            <div className="flex flex-col">
              <label className="mb-3">Date of Birth</label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <>
                    <DatePicker
                      selected={value}
                      onChange={onChange}
                      dateFormat="dd MMMM yyyy"
                      placeholderText="Select a date"
                      ref={ref}
                      className="p-3 text-stormy-grey text-sm border border-rainy-grey rounded-2xl w-full focus:outline-none focus:ring-0"
                      aria-required="true"
                      aria-invalid={errors.dateOfBirth ? 'true' : 'false'}
                    />
                    <Text
                      variant={TEXT_VARIANTS.CAPTION}
                      className="block text-rose-red"
                    >
                      {errors.dateOfBirth && errors.dateOfBirth.message}
                    </Text>
                  </>
                )}
              />
            </div>
            <Input
              {...register('permanentAddress')}
              label="Permanent Address"
              type="text"
              error={errors.permanentAddress && errors.permanentAddress.message}
              aria-invalid={errors.permanentAddress ? 'true' : 'false'}
              aria-required="true"
            />
            <Input
              {...register('postalCode')}
              label="Postal Code"
              type="text"
              error={errors.postalCode && errors.postalCode.message}
              aria-invalid={errors.postalCode ? 'true' : 'false'}
              aria-required="true"
            />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <Input
              {...register('username')}
              label="User Name"
              type="text"
              error={errors.username && errors.username.message}
              aria-invalid={errors.username ? 'true' : 'false'}
              aria-required="true"
            />
            <Input
              {...register('password')}
              label="Password"
              type="password"
              error={errors.password && errors.password.message}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            <Input
              {...register('presentAddress')}
              label="Present Address"
              type="text"
              error={errors.presentAddress && errors.presentAddress.message}
              aria-invalid={errors.presentAddress ? 'true' : 'false'}
              aria-required="true"
            />
            <Input
              {...register('city')}
              label="City"
              type="text"
              error={errors.city && errors.city.message}
              aria-invalid={errors.city ? 'true' : 'false'}
              aria-required="true"
            />
            <Input
              {...register('country')}
              label="Country"
              type="text"
              error={errors.country && errors.country.message}
              aria-invalid={errors.country ? 'true' : 'false'}
              aria-required="true"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button
          type="submit"
          variant={BUTTON_VARIANTS.PRIMARY}
          size={BUTTON_SIZES.SM}
          className="max-laptop:w-full"
          disabled={!isDirty || isPending || !isValid}
          aria-disabled={!isDirty || isPending || !isValid}
        >
          {isPending ? <Loading size={8} /> : 'Save'}
        </Button>
      </div>
    </form>
  );
}
