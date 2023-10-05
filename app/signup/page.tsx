import { signUp } from "../actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sign up",
  description: "Sign up page for new user",
};

const SignUp = () => {
  return (
    <div className="page-padding">
      <form
        action={signUp}
        className="mx-auto width flex flex-col justify-start gap-4 shadow-xl shadow-slate-900 ring-2 ring-slate-500 "
      >
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="name">User name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Write title"
            className="text-input"
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Write author name"
            className="text-input"
            required
          />
        </div>
        <div className="flex flex-col justify-start gap-2">
          <label htmlFor="genre">Genre:</label>
          <select name="genre" id="genre" required className="text-input">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex items-center gap-6">
          <button
            className="border-2 rounded-md border-slate-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-slate-500 active:bg-slate-600"
            type="submit"
            title="add blog"
          >
            Register
          </button>
          <button
            className=" border-2 rounded-md border-red-600 p-2 font-bold text-lg shadow-lg shadow-slate-900 hover:bg-red-700 active:bg-red-800  bg-red-600"
            type="button"
            title="clear form"
          >
            {" "}
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
