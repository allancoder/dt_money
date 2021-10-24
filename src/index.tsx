import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'UI Design',
          type: 'income',
          category: 'Development',
          amount: 2500,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Rent',
          type: 'outcome',
          category: 'Expense',
          amount: 1500,
          createdAt: new Date('2021-02-05 10:00:00'),
        },
        {
          id: 3,
          title: 'UX & UI Design and Development',
          type: 'income',
          category: 'Development',
          amount: 7500,
          createdAt: new Date('2021-02-21 07:00:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', { ...data, createdAt: new Date()});
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
