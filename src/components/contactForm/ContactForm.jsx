import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css"


const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={s.contactForm}>
          <div className={s.form}>
            <label className={s.labelContactForm}>Name</label>
            <Field
              name="name"
              type="text"
              className={s.fieldContactForm}
            />
            <ErrorMessage name="name" compomemt="span" className={s.error} component="div" />
          </div>
          <div className={s.form}>
            <label className={s.labelContactForm}>Number</label>
            <Field
              name="number"
              type="text"
              className={s.fieldContactForm}
            />
            <ErrorMessage name="number" compomemt="span" className={s.error} component="div" />
          </div>
          <div className={s.contactBtn}>
          <button
            type="submit"
            className={s.contactFormBtn}
          >
            Add Contact
          </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
