const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/api/data', (req, res) => {
  const data = [
    {
      id: 1,
      authRequestNo: '123',
      status: 'Pending',
      patient: 'John Doe',
      service: 'Medical Checkup',
      authType: 'Regular',
      createdDate: '2022-10-01',
    },
    {
      id: 2,
      authRequestNo: '456',
      status: 'Approved',
      patient: 'Jane Smith',
      service: 'Lab Test',
      authType: 'Urgent',
      createdDate: '2022-10-02',
    },
    {
        id: 4,
        authRequestNo: '101',
        status: 'Approved',
        patient: 'Bob Anderson',
        service: 'MRI Scan',
        authType: 'Urgent',
        createdDate: '2022-10-04',
      },
      {
        id: 5,
        authRequestNo: '112',
        status: 'Pending',
        patient: 'Sarah Davis',
        service: 'Ultrasound',
        authType: 'Regular',
        createdDate: '2022-10-05',
      },
      {
        id: 6,
        authRequestNo: '131',
        status: 'Approved',
        patient: 'Michael Wilson',
        service: 'Blood Test',
        authType: 'Urgent',
        createdDate: '2022-10-06',
      },
      {
        id: 7,
        authRequestNo: '151',
        status: 'Pending',
        patient: 'Emily Thompson',
        service: 'CT Scan',
        authType: 'Regular',
        createdDate: '2022-10-07',
      },
      {
        id: 8,
        authRequestNo: '171',
        status: 'Approved',
        patient: 'David Martinez',
        service: 'EKG',
        authType: 'Urgent',
        createdDate: '2022-10-08',
      },
      {
        id: 9,
        authRequestNo: '191',
        status: 'Pending',
        patient: 'Olivia Harris',
        service: 'Physical Therapy',
        authType: 'Regular',
        createdDate: '2022-10-09',
      },
      {
        id: 10,
        authRequestNo: '202',
        status: 'Approved',
        patient: 'James Lee',
        service: 'Surgery',
        authType: 'Urgent',
        createdDate: '2022-10-10',
      }
  ];

  res.json(data);
});

app.post('/api/submitAuth', (req, res) => {
  console.log("req=>",req);
  res.json({ message: 'Authorization request submitted successfully' });
});

app.listen(3002, () => {
  console.log('Dummy API server is running on port 3002');
});