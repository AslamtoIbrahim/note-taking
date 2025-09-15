import { FaLock, FaUser } from "react-icons/fa";
import GoogleSignIn from "../ui/GoogleSignIn";
import SubmitButton from "../ui/SubmitButton";
import z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { da } from "zod/locales";

const schema = z.object({
  email: z.string().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

type Inputs = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('data',data);
  };


  return (
    <div className="bg-light marx mt-12 flex flex-col items-center gap-y-8 rounded px-6 py-8">
      <GoogleSignIn />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <section>
          <div className="div-input">
            <FaUser className="text-secondary" />
            <input
              {...register("email")}
              className="form-input"
              type="text"
              placeholder="email"
            />
          </div>
          {errors && <p className="text-red-500">{errors.email?.message}</p>}
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
          {errors && <p className="text-red-500">{errors.password?.message}</p>}
        </section>
        <SubmitButton />
      </form>
      <div className="-mt-2">
        <p className="text-secondary text-sm md:text-base">
          Don't you have an account?{" "}
          <span className="hover:text-text-dark cursor-pointer underline">
            sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
