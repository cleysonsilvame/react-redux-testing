import { shallow } from "enzyme";
import React from "react";
import { storeFactory } from "../test/testUtils";
import App, { UnconnectedApp } from "./App";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @return {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive();

  return wrapper;
};

describe("redux properties", () => {
  test("has access to `success` state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  test("has access to `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
  });

  test("has access to `guessedWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];

    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toBe(guessedWords);
  });

  test("`getSecretWord` action creator is a function on the props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs on App mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };

  // set up app component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordCallout = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallout).toBe(1);
});
