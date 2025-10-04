import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import z from "zod";
import SubmitButton from "../ui/SubmitButton";
import { authClient } from "../../lib/auth-client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = z
  .object({
    username: z.string().nonempty("username is required"),
    email: z.email("invalid email"),
    password: z
      .string()
      .nonempty("passowrd is required")
      .min(8, "password too short"),
    confirmPassword: z.string().nonempty("confirmPassowrd is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Password do not match",
    path: ["confirmPassword"],
  });

type Inputs = z.infer<typeof schema>;

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const {error} = await authClient.signUp.email({
      email: data.email,
      password: data.confirmPassword,
      name: data.username
    })
    if (error) {
      toast.error('somthing went wrong')
      console.error('error: ', error.code)
      setIsLoading(false);
    }else{
      toast.success('you signed up successfully')
      setIsLoading(false);
      navigate('/sign-in')
    }
  };
  return (
    <div className="bg-light marx mt-12 flex flex-col items-center gap-y-8 rounded px-6 py-8 dark:bg-primary/5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <section>
          <div className="div-input">
            <FaUser className="text-secondary" />
            <input
              {...register("username")}
              className="form-input"
              type="text"
              placeholder="user name"
            />
          </div>
          {errors && <p className="text-red-500">{errors.username?.message}</p>}
        </section>
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
        </section>
        <section>
          <div className="div-input">
            <FaLock className="text-secondary" />
            <input
              {...register("confirmPassword")}
              className="form-input"
              type="password"
              placeholder="confirmPassword"
            />
          </div>
          {errors && <p className="form-error">{errors.confirmPassword?.message}</p>}
        </section>
        <SubmitButton loading={isLoading} text="create account" />
      </form>
    </div>
  );
};

export default SignUpForm;
