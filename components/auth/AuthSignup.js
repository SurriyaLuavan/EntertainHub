import Link from "next/link";
import styles from "/styles/FormField.module.css";
import AuthLayout from "@/components/auth/AuthLayout";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useAlert } from "@/context/AlertProvider";
import { CircularProgress } from "@mui/material";
import { createUser } from "@/lib/db";
import { formatUser } from "@/lib/db";
import { useAuth } from "@/context/AuthProvider";
import axios from "axios";

const AuthSignup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const { onOpen } = useAlert();
  const { setLoadingState, setUserIdState } = useAuth();
  const [focus, setFocus] = useState({
    email: true,
    password: true,
    confirm: true,
  });
  const router = useRouter();

  function resetFocus() {
    Object.keys(focus).forEach((item) => {
      setFocus((prev) => {
        return { ...prev, [item]: false };
      });
    });
  }

  function handleSubmit(values) {
    resetFocus();
    formik.handleSubmit(values);
  }

  function handleFocus(e) {
    setFocus((prev) => {
      return { ...prev, [e.target.name]: true };
    });
  }

  function handleBlur(e) {
    setFocus((prev) => {
      return { ...prev, [e.target.name]: false };
    });
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(8, "Min. 8 characters"),
      confirm: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      createUserWithEmailAndPassword(values.email, values.password);
    },
  });

  useEffect(() => {
    if (loading) {
      setLoadingState(true);
    }

    if (!loading && (user || error)) {
      const type = error === undefined ? "success" : "error";
      const message =
        error && error.code === "auth/email-already-in-use"
          ? "Email already exits!"
          : "Sign-up successful!";
      onOpen(type, message);

      if (!loading && !error && user) {
        const data = formatUser(user.user);
        createUser(user.user.uid, data);
        const options = {
          url: `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}`,
          data: {
            email: user.user.email,
          },
        };

        const createUserId = async () => {
          const res = await axios.post(options.url, options.data);
          const data = res.data;
          if (data._id) {
            setUserIdState(data._id);
          }
        };

        createUserId();
      }

      if (type === "success") {
        formik.handleReset();
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    }
  }, [user, error, loading]);

  return (
    <AuthLayout type="Sign Up" onSubmit={handleSubmit}>
      <label htmlFor="email" className={styles.inputFieldContainer}>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.inputField} | ${styles.fsInput} ${
            formik.errors.email && !focus.email && styles.errorField
          } bg-primary-600 text-neutral-100 fw-light`}
          placeholder="Email address"
        />
        {formik.errors.email && !focus.email ? (
          <div
            className={` ${styles.errorMessage} ${styles.fsError} text-accent fw-light`}
          >
            {formik.errors.email}
          </div>
        ) : null}
      </label>
      <label htmlFor="password" className={styles.inputFieldContainer}>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.inputField}  | ${styles.fsInput} ${
            !focus.password && formik.errors.password && styles.errorField
          } bg-primary-600 text-neutral-100 fw-light`}
          placeholder="Password"
        />
        {!focus.password && formik.errors.password ? (
          <div
            className={` ${styles.errorMessage} ${styles.fsError} text-accent fw-light`}
          >
            {formik.errors.password}
          </div>
        ) : null}
      </label>
      <label htmlFor="confirm" className={styles.inputFieldContainer}>
        <input
          type="password"
          id="confirm"
          name="confirm"
          onChange={formik.handleChange}
          value={formik.values.confirm}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${styles.inputField}  | ${styles.fsInput} ${
            !focus.confirm && formik.errors.confirm && styles.errorField
          } bg-primary-600 text-neutral-100 fw-light`}
          placeholder="Repeat password"
        />
        {!focus.confirm && formik.errors.confirm && (
          <span
            className={` ${styles.errorMessage} ${styles.fsError} text-accent fw-light`}
          >
            {formik.errors.confirm}
          </span>
        )}
      </label>
      <button
        type="submit"
        disabled={loading}
        className={`${styles.submitButton} | ${styles.fsInput} fw-light `}
      >
        {loading ? (
          <CircularProgress
            size={18}
            sx={{
              color: "black",
            }}
          />
        ) : (
          "Create an account"
        )}
      </button>
      <p className={`${styles.fsInput} ${styles.para} fw-light`}>
        Already have an account?{" "}
        <Link href="/login" className="text-accent">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default AuthSignup;
