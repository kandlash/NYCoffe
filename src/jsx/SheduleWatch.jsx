import React, { useState, useEffect } from "react";

const ScheduleWatch = () => {
    const [scheduleData, setScheduleData] = useState(null); // Состояние для хранения данных с бэкенда

    useEffect(() => {
        // Ваша функция для получения данных с бэкенда
        const fetchData = async () => {
            // try {
            //     // Здесь должен быть ваш запрос на бэкенд для получения данных
            //     // Например, используя fetch или axios
            //     const response = await fetch('http://example.com/api/data');
            //     const data = await response.json();
            //     setScheduleData(data); // Устанавливаем полученные данные в состояние
            // } catch (error) {
                // console.error('Error fetching data:', error);
                setScheduleData({
                    "week": "18.03.2024-24.03.2024",
                    "shifts": {
                        "Monday": 1,
                        "Tuesday": 2,
                        "Wednesday": 2,
                        "Thursday": 1,
                        "Friday": 2,
                        "Saturday": 3,
                        "Sunday": 1
                    }
                })
        };

        fetchData(); // Вызываем функцию получения данных при монтировании компонента
    }, []); // Пустой массив зависимостей означает, что эффект выполняется только один раз при монтировании компонента

    return (
        <div className="schedule-watch-container">
            {scheduleData && (
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Вс</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map(shift => (
                            <tr key={shift}>
                                <td>{shift} смена</td>
                                {Object.keys(scheduleData.shifts).map(day => (
                                    <td className="tds" key={day}>
                                        <div className={`shedule-watch-table-content ${scheduleData.shifts[day] === shift ? 's' : ''}`}>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ScheduleWatch;
