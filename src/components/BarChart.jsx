import React from 'react';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';



const data = [
    {
        name: 'Delhi',
        completed: 101,
        target: 1000,
        
    },
    {
        name: 'Lucknow',
        completed: 102,
        target: 250,
    },
    {
        name: 'Navi Mumbai',
        completed: 20,
        target: 225,
    },
    {
        name: 'Chandigarh',
        completed: 29,
        target: 200,
    },
    {
        name: 'Kolkata',
        completed: 80,
        target: 150,
    },
    {
        name: 'Bhubaneswar',
        completed: 14,
        target: 100,
    },
    {
        name: 'Jabalpur',
        completed: 1,
        target: 100,
    },
    {
        name: 'Kanpur',
        completed: 59,
        target: 100,
    },
    {
        name: 'Allahabad',
        completed: 84,
        target: 100,
    },
  
];

const renderToolTip = ({ payload }) => {
    console.log(payload)
    const name = payload ? payload[0]?.payload?.name : undefined
    const completed = payload ? payload[0]?.payload?.completed : undefined
    const target = payload ? payload[0]?.payload?.target: undefined
    const color1 = payload ? payload[0]?.color : undefined
    const color2 = payload ? payload[1]?.color : undefined
    return (
      <div style={{ padding: '15px 15px', backgroundColor: '#fff', fontSize: 18, borderRadius:'4px' }}>
        <div>
          {name}
        </div>
        <div style={{ color: color1 }}>
          Completed : <span>{completed}</span>
        </div>
        <div style={{ color: color2 }}>
          To be covered: <span>{+target-completed}</span>
        </div>
        
  
  
      </div>
    )
  }

export default function BarChartComp() {



    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 48,
                    bottom: 5,
                }}
                layout='vertical'
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip content={renderToolTip} />
                <Legend />
                <Bar dataKey="completed" name='Completed'  stackId='a' fill='#2eb82c' />
                <Bar dataKey="target" name='To be covered' stackId='a' fill="blue" />


            </ComposedChart>
        </ResponsiveContainer>
    )

}
