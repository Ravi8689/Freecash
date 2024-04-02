import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";
const TabList = () => {
  return (
    <Tabs.List className="bg-anova1 overflow-hidden rounded-full mx-2 grid grid-cols-2 text-center justify-end">
    <Tabs.Trigger
      className="TabsTrigger_chat p-2 font-medium col-span-1 text-anovatext1"
      value="general"
    >
      General
    </Tabs.Trigger>
    <Tabs.Trigger
      className="TabsTrigger_chat p-2 font-medium col-span-1 text-anovatext1"
      value="help"
    >
      Help
    </Tabs.Trigger>
  </Tabs.List>
  )
}

export default TabList