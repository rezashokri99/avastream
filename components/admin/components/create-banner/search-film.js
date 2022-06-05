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
      axios.get("/api/admin/films/banner", {params: {text: value}})
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
  };

  handleSearch = value => {
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
    const options = this.state.data.map(d => <Option value={d._id} key={d._id}>{d.name}</Option>);
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
        onSelect= {value => this.props.getFilmId(value)}
      >
        {options}
      </Select>
    );
  }
}

export default SearchFilm