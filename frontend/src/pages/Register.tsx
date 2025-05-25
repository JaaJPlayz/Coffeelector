import { Formik, Field, Form } from "formik";
import styles from "./styles/register.module.css";

export const Register = () => {
  return (
    <div className={styles["register"]}>
      <h1>Register</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field
            id="username"
            name="username"
            placeholder="Username"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="example@dev.com"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="sample-Password"
            type="password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
