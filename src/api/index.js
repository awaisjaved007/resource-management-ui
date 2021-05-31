import axios from "axios";
import { message } from "antd";
const SERVER_URL = "http://rms-service:30008/resource-management/v1";

export function getCaterersByCity(
  cityName,
  pageNumber,
  processingCB,
  successCB
) {
  processingCB(true);
  axios
    .get(`${SERVER_URL}/caterer/all/${cityName}?page=${pageNumber}`)
    .then((response) => {
      const { caterers } = response.data;
      const { content, totalElements, size } = caterers;
      const pagination = {
        total: totalElements,
        pageSize: size,
      };
      successCB(content, pagination);
      processingCB(false);
    })
    .catch((response) => {
      const { message: responseMessage } = JSON.parse(JSON.stringify(response));
      message.error(responseMessage);
      processingCB(false);
    });
}

export function getCatererByNameOrId(nameOrId, processingCB, successCB) {
  processingCB(true);
  axios
    .get(`${SERVER_URL}/caterer/${nameOrId}`)
    .then((response) => {
      const { caterer } = response.data;
      const pagination = {
        total: 1,
        pageSize: 5,
      };
      successCB([caterer], pagination);
      processingCB(false);
    })
    .catch((response) => {
      const { message: responseMessage } = JSON.parse(JSON.stringify(response));
      message.error(responseMessage);
      processingCB(false);
    });
}

export function createCaterer(catererData, processingCB, successCB) {
  processingCB(true);
  axios
    .post(`${SERVER_URL}/caterer`, catererData)
    .then(() => {
      successCB();
      processingCB(false);
    })
    .catch((response) => {
      const { message: responseMessage } = JSON.parse(JSON.stringify(response));
      message.error(responseMessage);
      processingCB(false);
    });
}
