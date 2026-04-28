import { Controller, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { Button } from "@mui/material";
import styles from "./contactForm.module.scss";
import { pizzaStore } from "../../Zustand/Pizza_Store";
import { useTranslation } from "react-i18next";
interface MyForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  desc: string;
}

const ContactForm = () => {
  const { telgramContactPost } = pizzaStore();
  const {t}  = useTranslation()
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<MyForm>({
    mode: "onBlur",
  });
  const OnSumbit = (data: MyForm) => {
      console.log(data)
     telgramContactPost(data)
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(OnSumbit)}>
      <div className={styles.top}>
        <label className="">
          <span className={styles.errorSpan}>
            {errors.firstName && errors.firstName.message}
          </span>
          <input
            {...register("firstName", {
              required: `${t("form.firstName.required")}`,
              minLength: {
                value: 3,
                message: `${t("form.firstName.minLength")}`,
              },
            })}
            type="text"
            placeholder= {t("form.firstName.placeholder")}
          />
        </label>
        <label className="">
          <span className={styles.errorSpan}>
            {errors.lastName && errors.lastName.message}
          </span>
          <input
            type="text"
            {...register("lastName", {
              required: `${t("form.lastName.required")}`,
            })}
            placeholder= {t("form.lastName.placeholder")}
          />
        </label>
      </div>
      <div className={styles.bottom}>
        <label>
          <span className={styles.errorSpan}>
            {errors.phone && errors.phone.message}
          </span>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: `${t("form.phone.required")}`,
              minLength: {
                value: 18,
                message: `${t("form.phone.minLength")}`,
              },
              
            }}
            render={({ field }) => (
              <PatternFormat
              {...field}
                format="+7 (###) ### - ## - ##"
                mask="_"
                placeholder="+7 (707)-360-89-48"
              />
            )}
          ></Controller>
        </label>
        <label>
          <span className={styles.errorSpan}>
            {errors.email && errors.email.message}
          </span>
          <input
            {...register("email", {
              required: `${t("form.email.required")}`,
              pattern: {
                value: /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t("form.email.pattern")}`,
              },
            })}
            type="text"
            placeholder= {t("form.email.placeholder")}
          />
        </label>
      </div>
      <textarea
        {...register("desc", {
          required: `${t("form.desc.required")}`,
          minLength: {
            value: 10,
            message: `${t("form.desc.minLength")}`
          },
        })}
        className={styles.contactContent}
      ></textarea>
      <Button type="submit" variant="contained" disabled={!isValid}>
        {t('form.submit')}
      </Button>
    </form>
  );
};

export default ContactForm;
