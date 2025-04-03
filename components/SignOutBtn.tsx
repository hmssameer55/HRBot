"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "@/lib/actions/auth.action";

const SignOutBtn = () => {
  return (
    <Button className="btn-primary" onClick={signOut}>
      Sign out
    </Button>
  );
};

export default SignOutBtn;
