import { createServer } 						from 'http';
import { requestDataService }       from '../_common/requestDataService';
import { requestTimeConstants,
         appPorts }                 from '../_constants/constants.js';

createServer(function (req, res) {
  console.log('welcome');
  setInterval(() => {
    requestDataService('http://localhost:' + appPorts.client_request_port)
    .then(
      result => {
        const publishRows = buildHtmlRows(result);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(writeTable(publishRows));
      },
      error =>  console.log(error)
  )}, requestTimeConstants.client_update_time)
}).listen(appPorts.client_host_port);

function buildHtmlRows(result){
  var finalString = '';
  for (var i = 0; i < result.length; ++i)
  {
    var id = result[i].ID;
    var rowToDisplay = '';
    for (var j = 2; j < 22; ++j)
    {
      var tdValue = result[i][Object.keys(result[i])[j]];
      var className = tdDisplayStyle(parseFloat(tdValue));
      rowToDisplay = rowToDisplay  + '<td ' + 'style=' + className + '>' + tdValue + '</td>';
    }
    
    finalString = finalString + '<tr>' + '<td>' + id + '</td>' + rowToDisplay + '</tr>';
  }
  return finalString;
}

function writeTable(publishRows){
  //Указываем кодировку для корректного отображения кириллицы
  const charSet                 = '<meta charset="UTF-8">';
  //Начало элемента таблица
  const table_starter           = '<table class="tkb-table">';
  //Начало формирования шапки таблицы
  const table_header_starter    = '<thead><tr><th>ID</th>';
  var columns                   = '';
  for(var i = 1; i < 21; ++i){
    columns                     = columns + '<th>Пар. ' + i + '</th>';
  }
  const table_header_end        = '</tr></thead>';
  const table_header            = table_header_starter + columns + table_header_end;
  //Формирование рядов таблицы
  const table_rows_start        = '<tbody>';
  const table_rows              = '<tr><td>Entity 1</td><td>0.54</td><td>0.45</td><td>0.99</td><td>0.1</td></tr><tr><td>Entity 8</td><td>0.67</td><td>-0.26</td><td>0.88</td><td>0</td></tr>';
  const table_rows_end          = '</tbody>';
  //Конец элемента таблица
  const table_footer            = '</table>';
  const table                   = table_starter + table_header + table_rows_start + publishRows + table_rows_end + table_footer;
  //Стили для таблицы
  const style_starter           = '<style>';
  const style_table             = '.tkb-table {border: solid 1px #DDEEEE;border-collapse: collapse;border-spacing: 0;font: normal 13px Arial, sans-serif;}';
  const style_header            = '.tkb-table thead th {background-color: #DDEFEF;border: solid 1px #DDEEEE;color: #336B6B;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;}';
  const style_body              = '.tkb-table tbody td {border: solid 1px #DDEEEE;color: #333;padding: 10px;text-shadow: 1px 1px 1px #fff;}';
  const style_footer            = '</style>';
  const style                   = style_starter + style_table + style_body + style_header + style_footer;

  return charSet + table + style;
}

function tdDisplayStyle(tdValue){
  var className                 = '';
  if((tdValue>=-1)&&(tdValue<0))
    className                   = 'background-color:rgba(255,140,0,' + Math.abs(tdValue) + ')';
  if(tdValue==0)
    className                   = 'background-color:rgb(255,255,255)';
  if((tdValue>0)&&(tdValue<1))
    className                   = 'background-color:rgba(0,0,0,' + Math.abs(tdValue) + ')';
  return className;
}