import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Avatar, Table } from "@radix-ui/themes";
import { useStore } from "@/store";
import Link from "next/link";
import { TbCoinFilled } from "react-icons/tb";
const TabContent = () => {
  const getTableData = useStore((state) => state.getTableData);

  return (
    <div>
      <Tabs.Content value="all">
        <div className="product_main_group4-table text-blue-600">
          <Table.Root>
            <Table.Header>
              <Table.Row className="tablerows text-anovatext2">
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="table-cell-time">
                  Email
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="table-cell-users">
                  Time
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {getTableData.map((item, index) => {
                return (
                  <Table.Row key={index} className="tablerows1">
                    <Table.RowHeaderCell className="tablerows1">
                      <Avatar
                        className="mr-2"
                        size="2"
                        radius="large"
                        src={item.user.userImage}
                        fallback={item.user.name.slice(0, 1)}
                      />
                      {item.user.name}
                    </Table.RowHeaderCell>
                    <Table.Cell className="table-cell-users text-anovatext1">
                      <Avatar
                        className="mr-2"
                        size="2"
                        radius="full"
                        src={item.user.appImage}
                        fallback={item.user.name.slice(0, 1)}
                      />
                      {item.user.email}
                    </Table.Cell>
                    <Table.Cell className="table-cell-time text-anovatext1">
                      {item.time}
                    </Table.Cell>
                    <Table.Cell className="flex items-center text-white font-bold">
                      <TbCoinFilled className="mr-1 text-yellow-500" />
                      {item.reward}
                    </Table.Cell>
                  </Table.Row>
                );
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
                <Table.ColumnHeaderCell className="table-cell-time">
                  Email
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="table-cell-users">
                  Time
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {getTableData &&
              getTableData.filter((items) => items.remark === "offer").length >
                0 ? (
                getTableData
                  .filter((items) => items.remark === "offer")
                  .map((item, index) => {
                    return (
                      <Table.Row key={index} className="tablerows1">
                        <Table.RowHeaderCell className="tablerows1">
                          <Avatar
                            className="mr-2"
                            size="2"
                            radius="large"
                            src={item.user.userImage}
                            fallback={item.user.name.slice(0, 1)}
                          />
                          {item.user.name}
                        </Table.RowHeaderCell>
                        <Table.Cell className="table-cell-users text-anovatext1">
                          <Avatar
                            className="mr-2"
                            size="2"
                            radius="full"
                            src={item.user.appImage}
                            fallback={item.user.name.slice(0, 1)}
                          />
                          {item.user.email}
                        </Table.Cell>
                        <Table.Cell className="table-cell-time text-anovatext1">
                          {item.time}
                        </Table.Cell>
                        <Table.Cell className="flex items-center text-white font-bold">
                          <TbCoinFilled className="mr-1 text-yellow-500" />
                          {item.reward}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
              ) : (
                <h1 className="w-full h-52">Coming Soon</h1>
              )}
            </Table.Body>
          </Table.Root>
        </div>
      </Tabs.Content>

      <Tabs.Content value="withdrawals">
        <div className="product_main_group4-table text-blue-600">
          <Table.Root>
            <Table.Header>
              <Table.Row className="tablerows text-anovatext2">
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="table-cell-time">
                  Email
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="table-cell-users">
                  Time
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {getTableData &&
              getTableData.filter((items) => items.remark === "withdrawal")
                .length > 0 ? (
                getTableData
                  .filter((items) => items.remark === "withdrawal")
                  .map((item, index) => {
                    return (
                      <Table.Row key={index} className="tablerows1">
                        <Table.RowHeaderCell className="tablerows1">
                          <Avatar
                            className="mr-2"
                            size="2"
                            radius="large"
                            src={item.user.userImage}
                            fallback={item.user.name.slice(0, 1)}
                          />
                          {item.user.name}
                        </Table.RowHeaderCell>
                        <Table.Cell className="table-cell-users text-anovatext1">
                          <Avatar
                            className="mr-2"
                            size="2"
                            radius="full"
                            src={item.user.appImage}
                            fallback={item.user.name.slice(0, 1)}
                          />
                          {item.user.email}
                        </Table.Cell>
                        <Table.Cell className="table-cell-time text-anovatext1">
                          {item.time}
                        </Table.Cell>
                        <Table.Cell className="flex items-center text-white font-bold">
                          <TbCoinFilled className="mr-1 text-yellow-500" />
                          {item.reward}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
              ) : (
                <h1 className="w-full h-52">Coming Soon</h1>
              )}
            </Table.Body>
          </Table.Root>
        </div>
      </Tabs.Content>
    </div>
  );
};

export default TabContent;
