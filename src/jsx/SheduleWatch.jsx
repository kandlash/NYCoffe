import React, { useState, useEffect } from "react";
import moment from "moment";
import left_arrow from "../images/left_arrow.svg";
import right_arrow from "../images/right_arrow.svg";


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
    // Состояние для хранения текущей отображаемой недели
    const [currentWeek, setCurrentWeek] = useState(moment().startOf('isoWeek'));

    // Функция для переключения на предыдущую неделю
    const goToPreviousWeek = () => {
        // setSelectedShifts({}); // Очищаем выбранные смены
        setCurrentWeek(prevWeek => prevWeek.clone().subtract(1, 'week'));
    };

    // Функция для переключения на следующую неделю
    const goToNextWeek = () => {
        // setSelectedShifts({}); // Очищаем выбранные смены
        setCurrentWeek(prevWeek => prevWeek.clone().add(1, 'week'));
    };

    // Функция для форматирования текущей недели
    const formatCurrentWeek = () => {
        const startOfWeek = currentWeek.startOf('isoWeek').format('DD.MM.YYYY');
        const endOfWeek = currentWeek.endOf('isoWeek').format('DD.MM.YYYY');
        return `${startOfWeek}-${endOfWeek}`;
    };
    
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
            <div className="shedule-filling-week-swap">
                <button onClick={goToPreviousWeek}>
                    <img src={left_arrow} alt="leftarrow" />
                </button>
                <p>{formatCurrentWeek()}</p>
                <button onClick={goToNextWeek}>
                    <img src={right_arrow} alt="rightarrow" />
                </button>
            </div>
        </div>
    );
};

export default ScheduleWatch;
