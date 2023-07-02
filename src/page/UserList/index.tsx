import React, { useState, useEffect } from "react";
import { Table, Button, Spin, message } from "antd";
import { ManOutlined, SmileOutlined, WomanOutlined } from "@ant-design/icons";

import { getUserList } from "@/api/userList";
import { User } from "@/api/data";
import { ColumnsType } from "antd/lib/table";

export const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [dataSource, setDataSource] = useState<User[]>([]);

  const [viewDescription, setViewDescription] = useState({});

  const [total, setTotal] = useState(0);

  const Columns: ColumnsType<User> = [
    {
      title: "姓名",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      align: "center",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      align: "center",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
      render: (value) => {
        return value === 0 ? (
          <WomanOutlined rev={undefined} />
        ) : value === 1 ? (
          <ManOutlined rev={undefined} />
        ) : (
          <SmileOutlined rev={undefined} />
        );
      },
      align: "center",
    },
    {
      title: "简短文本",
      dataIndex: "shortDescription",
      key: "shortDescription",
      align: "center",
      width: 100,
    },
    {
      title: "长文本",
      dataIndex: "longDescription",
      key: "longDescription",
      align: "center",
      width: 100,
      ellipsis: true,
    },
    // {
    //   title: "长文本",
    //   width: 100,
    //   dataIndex: "longDescription",
    //   key: "longDescription",
    //   align: "center",
    //   render: (value, record) => {
    //     return (
    //       <Button
    //         type="link"
    //         onClick={() => {
    //           setViewDescription({
    //             title: `${record.name}的介绍`,
    //             content: value,
    //           });
    //         }}
    //       >
    //         查看
    //       </Button>
    //     );
    //   },
    // },
  ];

  const getUserListData = async () => {
    try {
      setLoading(false);
      const { data, total } = await getUserList(pageNum, pageSize);
      setDataSource(data || []);
      setTotal(total);
    } catch (error) {
      message.error(error);
      setDataSource([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserListData();
  }, []);

  return (
    <Spin spinning={loading} tip="加载中，请稍后...">
      <Table dataSource={dataSource} rowKey={"id"} columns={Columns} />
    </Spin>
  );
};
