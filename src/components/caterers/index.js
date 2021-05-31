import React from "react";
import { Input, Row, Col, Button } from "antd";
import { withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import CaterersList from "./list";
import { getCatererByNameOrId, getCaterersByCity } from "../../api";
import { searchJSON } from "../../utils/json-utils";
import { PlusCircleOutlined } from "@ant-design/icons";
const { Search } = Input;

class Caterers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caterers: [],
      city: "",
      id: "",
      loading: false,
      pageNumber: 1,
      pagination: {
        total: 0,
        pageSize: 5,
      },
    };
  }

  fetchCaterersByCity = (searchText, pageNumber) => {
    getCaterersByCity(
      searchText,
      pageNumber,
      (loading) => this.setState({ loading }),
      (caterers, pagination) =>
        this.setState({
          caterers,
          searchText,
          city: searchText,
          pagination,
        })
    );
  };
  handleSearch = (searchText, key) => {
    if (searchText.trim()) {
      if (key === "city") {
        const { pageNumber } = this.state;
        this.fetchCaterersByCity(searchText, pageNumber);
      } else {
        getCatererByNameOrId(
          searchText,
          (loading) => this.setState({ loading }),
          (caterers, pagination) =>
            this.setState({ caterers, pagination, searchText, id: searchText })
        );
      }
    }
  };

  handleChange = (dataKey) => {
    if (this.state[dataKey]) {
      this.setState({ [dataKey]: "", caterers: [] });
    }
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber }, () => {
      const { searchText } = this.state;
      this.fetchCaterersByCity(searchText, pageNumber);
    });
  };
  render() {
    const { caterers, loading, pagination } = this.state;
    const { history } = this.props;
    return (
      <div>
        <Row>
          <Col span={12}>
            <h1>Caterers</h1>
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              style={{ float: "right" }}
              onClick={() => history.push("/caterers/create")}
            >
              Create New Caterer
            </Button>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {searchJSON.map((searchItem) => {
            const { dataKey, span, placeholder } = searchItem;
            return (
              <Col key={dataKey} className="gutter-row" span={span}>
                <Search
                  placeholder={placeholder}
                  disabled={loading}
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={(searchText) =>
                    this.handleSearch(searchText, dataKey)
                  }
                  onChange={() => this.handleChange(searchItem.dataKey)}
                />
              </Col>
            );
          })}
        </Row>

        <CaterersList
          data={caterers}
          loading={loading}
          pagination={pagination}
          onPageChange={(pageNumber) => this.handlePageChange(pageNumber)}
        />
      </div>
    );
  }
}

export default withRouter(Caterers);
