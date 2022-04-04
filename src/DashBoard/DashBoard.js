import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css';
const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='dashboard-area'>
            <div className="chart-one">
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                    <YAxis />
                    <XAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <div className="chart-two">
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey="sell" fill="#8884d8"></Bar>
                    <Bar dataKey="investment" fill="#82ca9d" />
                    <YAxis />
                    <XAxis />
                    <Tooltip />
                    <Legend />
                </BarChart>
            </div>
        </div>
    );
};

export default DashBoard;