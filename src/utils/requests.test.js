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
  await expect(requestSearchApi('test')).resolves.toEqual(data);
});


it('getAnalysisApi fetches results', async () => {
    const data = results;  
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getAnalysisApi()).resolves.toEqual(data);
  });


});