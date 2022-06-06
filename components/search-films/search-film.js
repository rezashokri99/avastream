import React from 'react';
import { Select } from 'antd';
import querystring from 'querystring';
import axios from 'axios';

const { Option } = Select;

let timeout;
let currentValue;

function fetchFilms(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fetch() {
    axios.get("/api/admin/banners/create", { params: { text: value, type: "search" } })
      .then(res => {
        console.log(res);
        callback(res.data);
      })
      .catch(err => console.error(err))

  }

  timeout = setTimeout(fetch, 300);
}

class SearchFilm extends React.Component {
  state = {
    data: [],
    value: undefined,
    initialValue: this.props.initialValue ? this.props.initialValue : null,
    handleChangeStatus: false,
  };

  handleSearch = value => {
    this.setState({ initialValue: null, handleChangeStatus: true });
    if (value) {
      fetchFilms(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const banner = this.props.initialValue;
    const status = this.state.handleChangeStatus;
    const options = banner !== null && !status ? <Option value={banner._id} key={banner._id}>{banner.name}</Option> : this.state.data.map(d => <Option value={d._id} key={d._id}>{d.name}</Option>);
    return (
      <Select
        defaultValue={banner !== null && !status ? banner._id : null}
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={banner !== null && !status ? true : false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
        onSelect={(value) => this.props.getFilmID(value)}
      >
        {options}
      </Select>
    );
  }
}

export default SearchFilm