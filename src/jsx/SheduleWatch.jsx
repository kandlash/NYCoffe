import React, { useState, useEffect, useContext, useCallback } from "react";
import moment from "moment";
import left_arrow from "../images/left_arrow.svg";
import right_arrow from "../images/right_arrow.svg";
import AuthContext from "./AuthContext";

const ScheduleWatch = (props) => {
    const [scheduleData, setScheduleData] = useState(null); // Состояние для хранения данных с бэкенда
    const { weeks, adminWeeks } = useContext(AuthContext);
    const [currentWeek, setCurrentWeek] = useState(moment().startOf('isoWeek'));
    const [currentAdminWeek, setCurrentAdminWeek]  = useState();
    
    const formatCurrentWeek = useCallback(() => {
        const startOfWeek = currentWeek.startOf('isoWeek').format('DD.MM.YYYY');
        const endOfWeek = currentWeek.endOf('isoWeek').format('DD.MM.YYYY');
        return `${startOfWeek}-${endOfWeek}`;
    }, [currentWeek]);

    const getWeek = useCallback(() => {
        const cw = formatCurrentWeek();
        let flag = false;
        weeks.forEach((week) =>{
            if(week.week === cw && week.name === props.name){
                setScheduleData(week)
                flag = true;
            }
        })
        if(!flag) setScheduleData(null);
        const admWk = adminWeeks.find((week) => week.week === formatCurrentWeek() && week.name === props.name);
        console.log(admWk);
        console.log(adminWeeks);
         setCurrentAdminWeek(admWk);
    }, [weeks, formatCurrentWeek, props.name]);

    useEffect(() => {
        getWeek();
    }, [getWeek]); // Include getWeek in the dependency array

    useEffect(()=> {
        getWeek();
    }, [currentWeek, getWeek]); // Include getWeek in the dependency array

    useEffect(()=>{
        setCurrentAdminWeek(adminWeeks.find((week) => week.week === formatCurrentWeek()));
    }, [formatCurrentWeek, adminWeeks])

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
                                        <div className={`shedule-watch-table-content  ${scheduleData.shifts[day] === shift ? 's' : ''} `}>
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
