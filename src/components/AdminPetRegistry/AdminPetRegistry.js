import React from 'react';
import MaterialTable from 'material-table';



export default function AdminPetRegistry() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'ID' },
      { title: 'Name', field: 'Name' },
      { title: 'Breed', field: 'Breed' },
      { title: 'Gender', field: 'Gender' },
      { title: 'Age', field: 'Age' },
      { title: 'Weight', field: 'Weight' },
    ],
    data: [
      { ID: 1,
        Name:'Max',
        Breed: 'Lab',
        Gender: 'Male',
        Age: 7,
        Weight: 100
      },
      { ID: 2,
        Name:'Ziggy',
        Breed: 'Poodle',
        Gender: 'Male',
        Age: 10,
        Weight: 35
      },
      { ID: 3,
        Name:'Ruby',
        Breed: 'Lab',
        Gender: 'Female',
        Age: 6,
        Weight: 85
      },
      { ID: 4,
        Name:'Chichi',
        Breed: 'Chihuahua',
        Gender: 'Female',
        Age: 11,
        Weight: 30
      },
      { ID: 5,
        Name:'Elsie',
        Breed: 'Lab',
        Gender: 'Female',
        Age: 7,
        Weight: 45
      },
      { ID: 6,
        Name:'Yogi',
        Breed: 'Boxer Mix',
        Gender: 'Male',
        Age: 13,
        Weight: 115
      },
      { ID: 7,
        Name:'Rory',
        Breed: 'Lab',
        Gender: 'Male',
        Age: 1,
        Weight: 35
      },
    ],
  });

  return (
    <MaterialTable
      title="Pet Registry"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

