import React from "react";
import { withRouter } from "react-router-dom";
import { Form, InputNumber, Input, Button, Space, Spin, Checkbox } from "antd";
import { formInitialValues, formJSON } from "../../../utils/json-utils";
import { createCaterer } from "../../../api";

class CatererForm extends React.Component {
  layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  buttonLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };

  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }
  submitForm = (catererData) => {
    const { history } = this.props;
    createCaterer(
      catererData,
      (loading) => this.setState({ loading }),
      () => history.push("/caterers")
    );
  };

  getFormElement = (formItem) => {
    const { type, placeholder } = formItem;
    switch (type) {
      case "text":
        return <Input placeholder={placeholder} />;
      case "number":
        return <InputNumber style={{ width: "100%" }} />;
      default:
        break;
    }
  };
  render() {
    const { history } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <h1>Add New Caterer</h1>

        <Form
          className="caterer-form"
          name="caterer"
          {...this.layout}
          onFinish={this.submitForm}
          initialValues={{ ...formInitialValues }}
        >
          {formJSON.map((formItem) => {
            const {
              label,
              name,
              nested,
              parentKey,
              required,
              requiredMessage,
            } = formItem;
            const itemName = nested ? [parentKey, name] : name;
            return (
              <Form.Item
                key={name}
                name={itemName}
                label={label}
                rules={[{ required, message: requiredMessage }]}
              >
                {this.getFormElement(formItem)}
              </Form.Item>
            );
          })}
          <Form.Item {...this.buttonLayout}>
            {loading ? (
              <div style={{ marginBottom: "10px" }}>
                <Spin />{" "}
              </div>
            ) : null}
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button onClick={() => history.push("/caterers")}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(CatererForm);
