import axios from "axios";
import jwt_decode from "jwt-decode";

const login = async ({ username, password }) => {
  const payload = {
    email: username,
    password: password,
  };

  console.log(payload);

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/login",
    payload
  );
  return data;
};

const signup = async ({ username, password, type }) => {
  const payload = {
    email: username,
    password: password,
    type: type,
  };

  console.log(payload);

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/signup",
    payload
  );
  return data;
};

const setPollResult = async ({ poll_id, answer }) => {
  const payload = {
    poll_id: poll_id,
    answer: answer,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/set_result_of_poll",
    payload
  );
  return data;
};

const getPollResult = async ({ poll_id }) => {
  const payload = {
    poll_id: poll_id,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/get_result_of_poll",
    payload
  );
  return data;
};

const editPoll = async ({ poll_id, question }) => {
  const payload = {
    poll_id: poll_id,
    question: question,
  };

  console.log(payload);

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/edit_poll",
    payload
  );
  return data;
};

const setUnchecked = async ({ poll_id }) => {
  const payload = {
    poll_id: poll_id,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/set_unchecked",
    payload
  );
  return data;
};

const setChecked = async ({ poll_id }) => {
  const payload = {
    poll_id: poll_id,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/set_checked",
    payload
  );
  return data;
};

const addPolls = async ({ question }) => {
  const payload = {
    question: question,
  };

  console.log(payload);

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/add_polls",
    payload
  );
  return data;
};

const getPollDate = async ({ poll_date }) => {
  const payload = {
    poll_date: poll_date,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/get_poll_date",
    payload
  );
  return data;
};

const getPollsSingular = async ({ poll_id }) => {
  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/get_polls_singular"
  );
  return data;
};

const getPoll = async ({ poll_id }) => {
  const payload = {
    poll_id: poll_id,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/get_poll",
    payload
  );
  return data;
};

const getPollsManyAll = async ({ poll_date_start, poll_date_end }) => {
  const payload = {
    poll_date_start: poll_date_start,
    poll_date_end: poll_date_end,
  };

  console.log(payload);

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/get_polls_many_all",
    payload
  );
  return data;
};

// get_polls_many_checked
const getPollsManyChecked = async ({ poll_date_start, poll_date_end }) => {
  const payload = {
    poll_date_start: poll_date_start,
    poll_date_end: poll_date_end,
  };

  const { data } = await axios.post(
    "https://odd-eel-51.loca.lt/get_polls_many_checked",
    payload
  );
  return data;
};

export default {
  login,
  signup,
  setPollResult,
  getPollResult,
  editPoll,
  setUnchecked,
  setChecked,
  addPolls,
  getPollDate,
  getPollsSingular,
  getPoll,
  getPollsManyAll,
  getPollsManyChecked,
};
