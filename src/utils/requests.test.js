import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axios from 'axios';
import {requestSearchApi,getAnalysisApi} from './requests';
import {results} from './mocked_data';
jest.mock('axios');

describe('Util Functions', () => {

it('requestSearchApi fetches timeStamp', async () => {
  const data = {timestamp:123};  
  axios.post.mockImplementationOnce(() => Promise.resolve(data));
  await expect(requestSearchApi('test')).resolves.toEqual({timestamp:123});
});


it('getAnalysisApi fetches results', async () => {
    const data = results;  
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getAnalysisApi()).resolves.toEqual({
      "values": [
          {
              "id": 1,
              "label": "7544042.js",
              "value": 1
          },
          {
              "id": 2,
              "label": "index.min.js",
              "value": 1
          },
          {
              "id": 3,
              "label": "satelliteLib-d02c51728c29ecf9a3db1b01abbed2ea57be2e3c.js",
              "value": 1
          },
          {
              "id": 4,
              "label": "main.5f4ba1662ff43e3c871d.js",
              "value": 1
          },
          {
              "id": 5,
              "label": "runtime.9d2c294756a5897edc1e.js",
              "value": 1
          }
      ]
  });
  });


});