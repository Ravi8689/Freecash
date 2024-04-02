import React from 'react'
import Link from "next/link";
import { Avatar, Table } from "@radix-ui/themes";
import { TbCoinFilled } from "react-icons/tb";
import * as Tabs from "@radix-ui/react-tabs";
import { useStore } from '@/store';
const TableData = () => {
  const userData=useStore((state)=>state.users)
  return (
    <div className="product_main_group4 my-5">
    <Tabs.Root defaultValue="offers">
      <div className="product_main_group4_sub1 flex justify-between mb-3">
        <div className="product_main_group4_innergroup1_sub1">
            <Tabs.List className="TabsTrigger_table flex gap-4 text-anovatext1">
              <Tabs.Trigger className="TabsTrigger_table" value="all">All</Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger_table" value="offers">Offers</Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger_table" value="withdrawals">Withdrawals</Tabs.Trigger>
            </Tabs.List>
        </div>

        <div className="product_main_group4_innergroup1_sub2">
          <button className="bg-anova4 hover:bg-green-600 hover:bg-green-600 px-4 py-2 rounded-lg">
            View all
          </button>
        </div>
      </div>

      <Tabs.Content value="all">
      <div className="product_main_group4-table text-blue-600">
      <Table.Root>
        <Table.Header>
          <Table.Row className="tablerows text-anovatext2">
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='table-cell-time'>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='table-cell-users'>Time</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {userData.map((item,index)=>{
            return <Table.Row key={index} className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src={item.userImage}
                fallback={item.name.slice(0,1)}
              />
              {item.name}
            </Table.RowHeaderCell>
            <Table.Cell className="table-cell-users text-anovatext1">
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src={item.appImage}
                fallback={item.name.slice(0,1)}
              />
              {item.email}
            </Table.Cell>
            <Table.Cell className='table-cell-time text-anovatext1'>{item.time}</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              {item.price}
            </Table.Cell>
          </Table.Row>

          })}
     

      

        </Table.Body>
      </Table.Root>
    </div>
      </Tabs.Content>

      <Tabs.Content value="offers">
      <div className="product_main_group4-table text-blue-600">
      <Table.Root>
        <Table.Header>
        <Table.Row className="tablerows text-anovatext2">
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='table-cell-time'>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='table-cell-users'>Time</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {userData.map((item,index)=>{
            return <Table.Row key={index} className="tablerows1">
            <Table.RowHeaderCell className="tablerows1">
              <Avatar
                className="mr-2"
                size="2"
                radius="large"
                src={item.userImage}
                fallback={item.name.slice(0,1)}
              />
              {item.name}
            </Table.RowHeaderCell>
            <Table.Cell className="table-cell-users text-anovatext1">
              <Avatar
                className="mr-2"
                size="2"
                radius="full"
                src={item.appImage}
                fallback={item.name.slice(0,1)}
              />
              {item.email}
            </Table.Cell>
            <Table.Cell className='table-cell-time text-anovatext1'>{item.time}</Table.Cell>
            <Table.Cell className="flex items-center text-white font-bold">
              <TbCoinFilled className="mr-1 text-yellow-500" />
              {item.price}
            </Table.Cell>
          </Table.Row>

          })}

      

          

        </Table.Body>
      </Table.Root>
    </div>
      </Tabs.Content>

      <Tabs.Content value="withdrawals">
        <h1 className="w-full h-52">Coming Soon</h1>
      </Tabs.Content>
    </Tabs.Root>

   
  </div>
  )
}

export default TableData 