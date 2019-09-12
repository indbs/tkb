import { createServer } 																from 'http';

createServer(function (req, res) {
  console.log('welcome');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(writeTable());
}).listen(8072);

function writeTable(){
  const charSet         = '<meta charset="UTF-8">';
  const table_starter   = '<table class="tkb-table">';
  const table_header    = '<thead><tr><th>ID</th><th>Параметр 1</th><th>Параметр 2</th><th>Параметр 3</th><th>Параметр 4</th></tr></thead>';
  const table_rows      = '<tbody><tr><td>Entity 1</td><td>0.54</td><td>0.45</td><td>0.99</td><td>0.1</td></tr><tr><td>Entity 8</td><td>0.67</td><td>-0.26</td><td>0.88</td><td>0</td></tr></tbody>';
  const table_footer    = '</table>';
  const table = table_starter + table_header + table_rows + table_footer;
  
  const style_starter   = '<style>';
  const style_table     = '.tkb-table {border: solid 1px #DDEEEE;border-collapse: collapse;border-spacing: 0;font: normal 13px Arial, sans-serif;}'
  const style_thread    = '.tkb-table thead th {background-color: #DDEFEF;border: solid 1px #DDEEEE;color: #336B6B;padding: 10px;text-align: left;text-shadow: 1px 1px 1px #fff;}'
  const style_body      = '.tkb-table tbody td {border: solid 1px #DDEEEE;color: #333;padding: 10px;text-shadow: 1px 1px 1px #fff;}'
  const style_footer    = '</style>';
  const style = style_starter + style_table + style_thread + style_body + style_footer;

  return charSet + table + style;
}