import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <form action="">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="border-1 border-purple-300"
              type="text"
              placeholder="Enter your email"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
