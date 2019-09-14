import   React                            from 'react';
import   axios                            from 'axios';
import { appPorts }                       from '../constants/constants.js';
import   ReactTable                       from 'react-table';
import                                         'react-table/react-table.css';
import                                         '../entityTable/entityTable.css';
import { allAggregations }                from '../_aggregation/aggregation.js';

export class EntityTable extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      displayFooterIndex: 0, 
      updated: false
    };
  }

  requestData(){
    axios.get('http://172.16.20.75:' + appPorts.client_request_port, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(
      (result)  => {
        console.log(this.state.updated);
        console.log(this.state.displayFooterIndex);
        const cutResult = result.data[1].splice(1, 20)
        this.setState({sumFooter:           allAggregations(cutResult).allParSumList});
        this.setState({minFooter:           allAggregations(cutResult).allParMinList});
        this.setState({maxFooter:           allAggregations(cutResult).allParMaxList});
        this.setState({avgFooter:           allAggregations(cutResult).allParAvgList});
        if (!this.state.updated){
          this.setState({displayFooter:     allAggregations(cutResult).allParSumList});
          this.setState({updated:           true});
        }
        this.setState({dataTable:     cutResult});
      },
      (err)     => console.log(err),
    )
  }

  switchAggregator = (state, instance) => {
      return {onClick: (e, handleOriginal) => {
        switch(this.state.displayFooterIndex){
          case 0: this.setState({displayFooter: this.state.sumFooter});
            break;
          case 1: this.setState({displayFooter: this.state.minFooter});
            break;
          case 2: this.setState({displayFooter: this.state.maxFooter});
            break;
          case 3: this.setState({displayFooter: this.state.avgFooter});
            break;
          default:
            console.log('error switching aggregator');
            break;
        }
        var displayFooterIndexInc = this.state.displayFooterIndex + 1;
        if (displayFooterIndexInc > 3) displayFooterIndexInc = 0;
        this.setState({displayFooterIndex: displayFooterIndexInc});
      }
    }
  }
  
  cellDecorator = (state, rowInfo, column, instance) => {
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
    if(rowInfo && rowInfo.row[column.id] > 0 && rowInfo.row[column.id] < 1 && rowInfo.row[column.id] <= 0.2){
    return {
        style: {
            background: 'rgba(0, 0, 0, ' + Math.abs(rowInfo.row[column.id]) + ')'
        },
    };}
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
    this.interval = setInterval(() => this.requestData(), 5000); 
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
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[0]
      }, {
        Header: 'Параметр 1',
        accessor: 'PAR1',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[1]
      }, {
        Header: 'Параметр 2',
        accessor: 'PAR2',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[2]
      }, {
        Header: 'Параметр 3',
        accessor: 'PAR3',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[3]
      }, {
        Header: 'Параметр 4',
        accessor: 'PAR4',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[4]
      }, {
        Header: 'Параметр 5',
        accessor: 'PAR5',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[5]
      }, {
        Header: 'Параметр 6',
        accessor: 'PAR6',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[6]
      }, {
        Header: 'Параметр 7',
        accessor: 'PAR7',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[7]
      }, {
        Header: 'Параметр 8',
        accessor: 'PAR8',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[8]
      }, {
        Header: 'Параметр 9',
        accessor: 'PAR9',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[9]
      }, {
        Header: 'Параметр 10',
        accessor: 'PAR10',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[10]
      }, {
        Header: 'Параметр 11',
        accessor: 'PAR11',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[11]
      }, {
        Header: 'Параметр 12',
        accessor: 'PAR12',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[12]
      }, {
        Header: 'Параметр 13',
        accessor: 'PAR13',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[13]
      }, {
        Header: 'Параметр 14',
        accessor: 'PAR14',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[14]
      }, {
        Header: 'Параметр 15',
        accessor: 'PAR15',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[15]
      }, {
        Header: 'Параметр 16',
        accessor: 'PAR16',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[16]
      }, {
        Header: 'Параметр 17',
        accessor: 'PAR17',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[17]
      }, {
        Header: 'Параметр 18',
        accessor: 'PAR18',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[18]
      }, {
        Header: 'Параметр 19',
        accessor: 'PAR19',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[19]
      }, {
        Header: 'Параметр 20',
        accessor: 'PAR20',
        headerClassName: 'hdr',
        className: 'hdr',
        Footer: this.state && this.state.displayFooter && this.state.displayFooter[20]
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
            getTdProps={this.cellDecorator}
            getTfootTdProps={this.switchAggregator}
          />}
      </div>
    )
  }
}