import css from './SearchForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Icon from '../../shared/icon/Icon';

const searchSchema = yup.object().shape({
  query: yup.string().min(1, 'Too Short!').max(50, 'Too Long!'),
});

export default function SearchForm({ onSearch }) {
  const locationFiledId = useId();

  const handleSubmit = values => {
    onSearch(values.query);
    if (!values.query) {
      toast.error('Please enter a search location');
    }
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={handleSubmit}
      validationSchema={searchSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={locationFiledId}>
            Location
            <Icon
              id="icon-map-pin"
              width="18"
              height="20"
              className={css.icon}
              alt="icon-map-pin"
            />
            <Field
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="City"
              name="query"
              id={locationFiledId}
            />
          </label>
        </div>

        <button className={css.button} type="submit"></button>
      </Form>
    </Formik>
  );
}
