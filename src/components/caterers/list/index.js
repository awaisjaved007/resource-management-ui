import React from "react";
import { Table } from "antd";
import { catererListColumns } from "../../../utils/json-utils";
const CaterersList = (props) => {
  const { data, loading, pagination, onPageChange } = props;

  return (
    <Table
      className="caterers-table"
      columns={catererListColumns}
      dataSource={data}
      loading={loading}
      pagination={{
        ...pagination,
        onChange: (page) => onPageChange(page),
      }}
    />
  );
};

export default CaterersList;
