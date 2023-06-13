import React from "react";

// PROVIDERS
import { HomeProvider } from "@/containers/home/useHomeContext";

// CONTAINERS
import HomePageContainer from "@/containers/home/home";

export default function Home() {
  return (
    <HomeProvider>
      <HomePageContainer />
    </HomeProvider>
  );
}
