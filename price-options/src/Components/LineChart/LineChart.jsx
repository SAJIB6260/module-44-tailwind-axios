
import { LineChart as Lchart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        {
          "id": 1,
          "name": "John Smith",
          "math": 85,
          "physics": 75,
          "chemistry": 82,
          "biology": 88
        },
        {
          "id": 2,
          "name": "Sarah Johnson",
          "math": 92,
          "physics": 88,
          "chemistry": 91,
          "biology": 79
        },
        {
          "id": 3,
          "name": "Michael Brown",
          "math": 78,
          "physics": 72,
          "chemistry": 68,
          "biology": 77
        },
        {
          "id": 4,
          "name": "Emily Davis",
          "math": 95,
          "physics": 91,
          "chemistry": 85,
          "biology": 92
        },
        {
          "id": 5,
          "name": "Daniel Lee",
          "math": 88,
          "physics": 78,
          "chemistry": 89,
          "biology": 84
        },
        {
          "id": 6,
          "name": "Olivia Clark",
          "math": 76,
          "physics": 65,
          "chemistry": 70,
          "biology": 62
        },
        {
          "id": 7,
          "name": "William Hall",
          "math": 90,
          "physics": 89,
          "chemistry": 94,
          "biology": 87
        },
        {
          "id": 8,
          "name": "Sophia White",
          "math": 84,
          "physics": 82,
          "chemistry": 76,
          "biology": 80
        },
        {
          "id": 9,
          "name": "James Allen",
          "math": 89,
          "physics": 87,
          "chemistry": 90,
          "biology": 85
        },
        {
          "id": 10,
          "name": "Emma Turner",
          "math": 93,
          "physics": 90,
          "chemistry": 93,
          "biology": 91
        }
      ];

    return (
        <div>
            <Lchart width={1000} height={500} data={studentMarksData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <CartesianGrid stroke="#f5f5f5" />
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'physics'} stroke='green'></Line>
            </Lchart>
            
        </div>
    );
};

export default LineChart;