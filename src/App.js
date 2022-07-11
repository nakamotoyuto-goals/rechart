import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';

const data = [
  {
    ts: 230,
    cv: 1000,
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page G',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page H',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page I',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page J',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page K',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page L',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page M',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page N',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page O',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page P',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page Q',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page R',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page S',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page T',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page U',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page V',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page W',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page X',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page Y',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page Z',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page AA',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page BB',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page CC',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    ts: 230,
    cv: 1000,
    name: 'Page DD',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  }
];
function App() {
  return (
    [...Array(15)].map((number) => {
      return <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      isAnimationActive={false}
    >
      <CartesianGrid stroke="#f5f5f5" isAnimationActive={false}/>
      <YAxis isAnimationActive={false}/>
      <Tooltip isAnimationActive={false}/>
      <Legend isAnimationActive={false} />
      {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" isAnimationActive={false}/> */}
      <Bar dataKey="pv" barSize={20} fill="#413ea0" isAnimationActive={false}/>
      <Line type="monotone" dataKey="uv" stroke="#ff7300" isAnimationActive={false}/>
      <Line type="monotone" dataKey="ts" stroke="#ff7300" isAnimationActive={false}/>
      <Line type="monotone" dataKey="cv" stroke="#ff7300" isAnimationActive={false}/>
      <Line type="monotone" dataKey="amt" stroke="#ff7300" isAnimationActive={false}/>
      <Scatter dataKey="cnt" fill="red" isAnimationActive={false}/>
    </ComposedChart>
    })
  );
}

export default App;
