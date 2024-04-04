import React from 'react'
import * as Tabs from "@radix-ui/react-tabs";

const TabList = () => {
  return (
    <div className="product_main_group4_sub1 flex justify-between mb-3">
        <div className="product_main_group4_innergroup1_sub1">
          <Tabs.List className="TabsTrigger_table flex gap-4 text-anovatext1">
            <Tabs.Trigger className="TabsTrigger_table" value="all">
              All
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger_table" value="offers">
              Offers
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger_table" value="withdrawals">
              Withdrawals
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <div className="product_main_group4_innergroup1_sub2">
          <button className="bg-anova4 hover:bg-green-600 hover:bg-green-600 px-4 py-2 rounded-lg">
            View all
          </button>
        </div>
      </div>
  )
}

export default TabList