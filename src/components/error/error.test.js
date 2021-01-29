import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Error from "./error";
import toJson from "enzyme-to-json";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore([thunk]);
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });
describe(`<Error />`, () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      app: {
        ERROR: "NEW ERROR",
      },
    });
  });
  it("should render Error", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Error />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
