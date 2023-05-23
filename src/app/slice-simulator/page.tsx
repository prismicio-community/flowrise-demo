"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import "@/app/globals.css";
import { components } from "../../../slices";

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  );
};

export default SliceSimulatorPage;
