import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import z from "zod";
import { authClient } from "../../lib/auth-client";
import useSession from "../../lib/auth-session";
import GoogleSignIn from "../ui/GoogleSignIn";
import SubmitButton from "../ui/SubmitButton";

const schema = z.object({
  email: z.string().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

type Inputs = z.infer<typeof schema>;

const LoginForm = () => {
  const { refetch } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const { error: responseError } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (responseError) {
      setError(responseError.message || "something went wrong");
      toast.error("somthing went wrong");
      setIsLoading(false);
      console.error("error", responseError.message);
    } else {
      refetch();
      toast.success("Welcome to Note taking");
      setIsLoading(false);
      setError("");
      navigate("/");
    }
  };

  const onGoogleSignInHandler = async () => {
    try {
      setIsGoogleLoading(true);
      const data = await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:5173",
      });
      if (data) {
        setIsGoogleLoading(false);
      }
    } catch (error) {
      setIsGoogleLoading(false);
      console.error("error: ", error);
      toast.error("something wrong");
    }
  };

  return (
    <div className="bg-light marx mt-12 flex flex-col items-center gap-y-8 rounded px-6 py-8">
      <GoogleSignIn onClick={onGoogleSignInHandler} loading={isGoogleLoading} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <section>
          <div className="div-input">
            <FaEnvelope className="text-secondary" />
            <input
              {...register("email")}
              className="form-input"
              type="text"
              placeholder="email"
            />
          </div>
          {errors && <p className="form-error">{errors.email?.message}</p>}
        </section>
        <section>
          <div className="div-input">
            <FaLock className="text-secondary" />
            <input
              {...register("password")}
              className="form-input"
              type="password"
              placeholder="password"
            />
          </div>
          {errors && <p className="form-error">{errors.password?.message}</p>}
          {error && <p className="form-error py-2">{error}</p>}
        </section>
        <SubmitButton loading={isLoading} text="log in" />
      </form>
      <div className="-mt-2">
        <p className="text-secondary text-sm md:text-base">
          Don't you have an account?{" "}
          <Link
            to={"/sign-up"}
            className="hover:text-text-dark cursor-pointer underline"
          >
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
