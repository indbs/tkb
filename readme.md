1. bs.js - запуcкает сервис генерерующий случайные данные (последовательность сущностей), как backend
2. ls.js - запуcкает сервис периодически опрашивающий backend, сохраняет сущности (последовательность сущностей) в mySQL
3. es.js - запускает сервис получающий сохраненные сущности или сущность из mySQL
4. cs.js - клиентская браузерная часть на html обращающаяся к сервису, который выдает данные из mySQL
5. react-client - spa c таблицей из react


html
<img src="https://github.com/indbs/tkb/blob/github/tkb_overview.jpg" width="500">

React
<img src="https://github.com/indbs/tkb/blob/github/react_client/react_client_overview.jpg" width="500">