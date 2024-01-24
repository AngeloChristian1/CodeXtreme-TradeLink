import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    console.log("Submitting", username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Or{" "}
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Create new account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="rounded-md shadow-sm px-3 py-2 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
          />
          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-indigo-600 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2 rounded focus:ring-indigo-500 h-4 w-4 text-indigo-600 shadow-sm"
            />
            <label for="remember" className="text-sm font-medium text-gray-700">
              Remember me
            </label>
          </div>
          <div className="text-sm font-medium text-gray-500 hover:text-indigo-500">
            <a href="/forgot-password">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;