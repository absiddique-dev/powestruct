import { Button } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const NavAction = () => {
  return (
    <Button
      color="success"
      className="cursor-pointer bg-blue-500 rounded-lg text-white"
      rightIcon={<ArrowUpRight />}
    >
      Request a call
    </Button>
  );
};

export default NavAction;
