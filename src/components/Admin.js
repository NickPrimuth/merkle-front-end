import * as React from 'react';
import styled from 'styled-components';

import { Loader } from './Loader';
import { formatDate } from '../utils/utils';

function Admin() {
  const [data, setData] = React.useState(null);

  // Fetch all data
  React.useEffect(() => {
    fetch('https://nick-primuth-merkle-back-end.herokuapp.com/user')
      .then((res) => res.json())
      .then((data) => setData(data.allUsers))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {data ? (
        <>
          <Header>
            <h1>Admin Report</h1>
          </Header>
          <Wrapper>
            <Table>
              <THead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address1</th>
                  <th>Address2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Country</th>
                  <th>Date</th>
                </tr>
              </THead>
              <TBody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.addressOne}</td>
                    <td>{item.addressTwo}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.zip}</td>
                    <td>{item.country}</td>
                    <td>{formatDate(item.date)}</td>
                  </tr>
                ))}
              </TBody>
            </Table>
          </Wrapper>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  /* height: 4em; */
  color: #ff9900;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  background: #fff;
  border-radius: 5px;
  margin: 2em;
`;

const THead = styled.thead`
  border-radius: 5px;
  th {
    font-size: 16px;
    font-weight: 400;
    /* color: rgba(58, 10, 85); */
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #f5f5f5;
    text-align: center;
    &:first-child {
      border-top-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
    }
  }
`;

const TBody = styled.tbody`
  font-weight: 400;
  font-size: 12px;
  border-bottom: 1px solid #5f6062;
  tr:nth-child(2n) {
    background: #f4f4f4;
  }
  td {
    text-align: center;
  }
`;
export default Admin;
