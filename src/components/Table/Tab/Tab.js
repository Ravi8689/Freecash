import React, { useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { useStore } from "@/store";
import TabList from "./TabList/TabList";
import TabContent from "./TabContent/TabContent";
import Loading from "../Loading";

const Tab = () => {
  const userData = useStore((state) => state.users);
  return (
    <>

        <Tabs.Root defaultValue="offers">
          <TabList />
          <TabContent />
        </Tabs.Root>
      
    </>
  );
};

export default Tab;
