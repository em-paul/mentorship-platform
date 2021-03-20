import { Card, CardContent, CardHeader } from '@material-ui/core';
import jsonServerProvider from 'ra-data-json-server';
import { useDataProvider } from 'react-admin';
import { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import BootStrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Modal, Button} from 'react-bootstrap';
import Pagination from './Pagination';

const state = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Applications',
      backgroundColor: 'rgba(59,140,217,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [56, 62, 73]
    },
    {
        label: 'Pairings',
        backgroundColor: 'rgba(0,180,151,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [31, 47, 58]
      }
  ]
}



export const Dashboard = () => (
    <div>
        <Card>
            <CardHeader title="Mentorship Platform" />
            <CardContent>Mockup for Pairing and Screening Dashboard</CardContent>
        </Card>
    
        <div style = {{float: 'left', height: '400px', width: '400px', padding: '10px'}}>
            <Bar
            data={state}
            options={{
                title:{
                display:true,
                text:'Applicant History',
                fontSize:20
                },
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0
                            }
                        }
                    ]

                },
                legend:{
                display:true,
                position:'top'
                }
            }}
            />
        </div>

        <Pagination />

    </div>
);