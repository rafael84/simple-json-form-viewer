import React from 'react'

import { JSONViewer } from 'simple-json-form-viewer'
import 'simple-json-form-viewer/dist/index.css'

const App = () => {
  return (
    <JSONViewer
      data={{
        id: '0001',
        type: 'donut',
        name: 'Cake',
        ppu: 0.55,
        empty: {},
        null: null,
        parent: {
          child: {
            'grand child': {
              'grand grand child': {
                'grand grand grand child': {
                  field: 'value'
                }
              }
            }
          }
        },
        dump: {
          request:
            'POST /post HTTP/1.1\r\nA: 1\r\nAccept: application/json, */*\r\nAccept-Encoding: gzip, deflate\r\nConnection: keep-alive\r\nContent-Length: 15\r\nContent-Type: application/json\r\nHost: httpbin.org\r\nUser-Agent: HTTPie/0.9.9\r\n\r\n{\r\n    "data": "123"\r\n}\r\n',
          response:
            'HTTP/1.1 200 OK\r\nAccess-Control-Allow-Credentials: true\r\nAccess-Control-Allow-Origin: *\r\nConnection: keep-alive\r\nContent-Length: 462\r\nContent-Type: application/json\r\nDate: Tue, 02 Jan 2018 22:31:46 GMT\r\nServer: meinheld/0.6.1\r\nVia: 1.1 vegur\r\nX-Powered-By: Flask\r\nX-Processed-Time: 0.000751972198486\r\n\r\n{\r\n    "args": {}, \r\n    "data": "{\\"data\\": \\"123\\"}", \r\n    "files": {}, \r\n    "form": {}, \r\n    "headers": {\r\n        "A": "1", \r\n        "Accept": "application/json, */*", \r\n        "Accept-Encoding": "gzip, deflate", \r\n        "Connection": "close", \r\n        "Content-Length": "15", \r\n        "Content-Type": "application/json", \r\n        "Host": "httpbin.org", \r\n        "User-Agent": "HTTPie/0.9.9"\r\n    }, \r\n    "json": {\r\n        "data": "123"\r\n    }, \r\n    "origin": "10.0.0.1", \r\n    "url": "http://httpbin.org/post"\r\n}\r\n'
        },
        batters: {
          batter: [
            { id: '1001', type: 'Regular' },
            { id: '1002', type: 'Chocolate' },
            { id: '1003', type: 'Blueberry' }
          ]
        },
        topping: [
          { id: '5001', type: 'None' },
          { id: '5002', type: 'Glazed' },
          { id: '5005', type: null },
          { id: '5007', type: 'Powdered Sugar' },
          { id: '5006', type: 'Chocolate with Sprinkles' },
          { id: '5003', type: 'Chocolate' },
          { id: '5004', type: 'Maple' }
        ]
      }}
    />
  )
}

export default App
