/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Table(props) {
  const { actions, columns, data } = props;
  return (
    <table>
      <thead>
        <tr>
          {
            columns.map((column) => (
              <th
                className={column.className}
                style={{ ...column.style }}
                key={column.id}
              >
                {column.name}
              </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr key={row.id}>
              {
                columns.map((column) => {
                  const cellId = `${row.id}_${column.id}`;
                  if (column.selector in row) return (<td key={cellId}>{row[column.selector]}</td>);

                  for (let i = 0; i < actions.length; i += 1) {
                    if (column.selector === actions[i].type) {
                      return (
                        <td
                          onClick={() => actions[i].handle(actions[i].type, row)}
                          key={cellId}
                        >
                          { actions[i].content }
                        </td>
                      );
                    }
                  }

                  return (<td key={cellId} />); // Returns empty cell
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    style: {},
    className: '',
  })),
  data: PropTypes.arrayOf({}),
  actions: PropTypes.arrayOf({}),
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    selector: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  })),
  data: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
