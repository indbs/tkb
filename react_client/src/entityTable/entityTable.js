import   React                            from 'react';
import   axios                            from 'axios';
import { appPorts }                       from '../constants/constants.js';
import   ReactTable                       from 'react-table'
import                                         'react-table/react-table.css';
import                                         '../entityTable/entityTable.css';

export class EntityTable extends React.Component{
  
  requestData(){
    axios.get('http://172.16.20.75:' + appPorts.client_request_port, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(
      (result)  => {
        console.log(result.data[1]);
        this.setState({dataTable: result.data[1]});
      },
      (err)     => console.log(err),
    )
  }
  
  colorMe = (state, rowInfo, column, instance) => {
    if(rowInfo && rowInfo.row[column.id] >= -1 && rowInfo.row[column.id] < 0)
    return {
        style: {
            background: 'rgba(255, 140, 0,' + Math.abs(rowInfo.row[column.id]) + ')',
        },
    };
    if(rowInfo && rowInfo.row[column.id] === 0)
    return {
        style: {
            background: 'rgb(255, 255, 255)',
        },
    };
    if(rowInfo && rowInfo.row[column.id] > 0 && rowInfo.row[column.id] < 1 && rowInfo.row[column.id] <= 0.2)
    return {
        style: {
            background: 'rgba(0, 0, 0, ' + Math.abs(rowInfo.row[column.id]) + ')'
        },
    };
    if(rowInfo && rowInfo.row[column.id] > 0 && rowInfo.row[column.id] < 1 && rowInfo.row[column.id] > 0.5)
    return {
        style: {
            background: 'rgba(0, 0, 0, ' + Math.abs(rowInfo.row[column.id]) + ')',
            color:      'white',
        },
    };
    return {};
  }

  componentDidMount() {
    this.interval = setInterval(() => this.requestData(), 1000); 
    this.requestData(); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){

    const columns = [
      {
        Header: 'ID',
        accessor: 'ID',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 1',
        accessor: 'PAR1',
        headerClassName: 'hdr',
        className: 'hdr',
      }, {
        Header: 'Параметр 2',
        accessor: 'PAR2',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 3',
        accessor: 'PAR3',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 4',
        accessor: 'PAR4',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 5',
        accessor: 'PAR5',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 6',
        accessor: 'PAR6',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 7',
        accessor: 'PAR7',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 8',
        accessor: 'PAR8',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 9',
        accessor: 'PAR9',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 10',
        accessor: 'PAR10',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 11',
        accessor: 'PAR11',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 12',
        accessor: 'PAR12',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 13',
        accessor: 'PAR13',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 14',
        accessor: 'PAR14',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 15',
        accessor: 'PAR15',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 16',
        accessor: 'PAR16',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 17',
        accessor: 'PAR17',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 18',
        accessor: 'PAR18',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 19',
        accessor: 'PAR19',
        headerClassName: 'hdr',
        className: 'hdr'
      }, {
        Header: 'Параметр 20',
        accessor: 'PAR20',
        headerClassName: 'hdr',
        className: 'hdr'
      }
    ];

    return (
      <div>
        { this.state && 
          <ReactTable
            data={this.state.dataTable}
            columns={columns}
            defaultPageSize={20}
            showPagination={false}
            getTdProps={this.colorMe}
            
          />}
      </div>
    )
  }
}