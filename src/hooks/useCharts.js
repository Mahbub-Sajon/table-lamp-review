import { useEffect, useState } from "react"

const useCharts = () => {
    const [charts, setCharts] = useState([]);
    useEffect ( () => {
        fetch('chartData.json')
        .then(res => res.json())
        .then(data => setCharts(data))
    } , []);
    return [charts, setCharts]
}
export default useCharts;