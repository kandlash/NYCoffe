import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import left_arrow from "../images/left_arrow.svg";
import right_arrow from "../images/right_arrow.svg";
import AuthContext from "./AuthContext";

const ScheduleFilling = ({ onSave, name }) => {
    // Состояние для хранения выбранных смен
    const [selectedShifts, setSelectedShifts] = useState({
        Monday: null,
        Tuesday: null,
        Wednesday: null,
        Thursday: null,
        Friday: null,
        Saturday: null,
        Sunday: null
    });

    const [isWeekExists, setIsWeekExists] = useState(false);

    const handleSave = () => {
        // Здесь вы можете собрать данные о нажатии кнопки "Сохранить"
        const data = {
            text: "Ваш график обновлен ",
            date: formatCurrentWeek()
        };
        onSave(data); // Вызываем обратный вызов и передаём ему данныеж
    };

    // Функция для обновления выбранной смены
    const handleShiftChange = (day, shift) => {
        setSelectedShifts(prevState => ({
            ...prevState,
            [day]: shift
        }));
    };

    // Состояние для хранения текущей отображаемой недели
    const [currentWeek, setCurrentWeek] = useState(moment().startOf('isoWeek'));

    // Функция для переключения на предыдущую неделю
    const goToPreviousWeek = () => {
        setSelectedShifts({}); // Очищаем выбранные смены
        setCurrentWeek(prevWeek => prevWeek.clone().subtract(1, 'week'));
    };

    // Функция для переключения на следующую неделю
    const goToNextWeek = () => {
        setSelectedShifts({}); // Очищаем выбранные смены
        setCurrentWeek(prevWeek => prevWeek.clone().add(1, 'week'));
    };

    // Функция для форматирования текущей недели
    const formatCurrentWeek = () => {
        const startOfWeek = currentWeek.startOf('isoWeek').format('DD.MM.YYYY');
        const endOfWeek = currentWeek.endOf('isoWeek').format('DD.MM.YYYY');
        return `${startOfWeek}-${endOfWeek}`;
    };

    const sendDataToBackend = (data) => {
        // Здесь вы можете использовать библиотеку для отправки HTTP запросов, например, fetch или axios
        // Пример с использованием fetch:
        fetch('http://example.com/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data sent successfully:', data);
            // Здесь можно добавить дополнительную логику в случае успешной отправки данных
        })
        .catch(error => {
            console.error('Error sending data:', error);
            // Здесь можно добавить обработку ошибок при отправке данных
        });
    };

    const { addWeeks, weeks, updateWeeks } = useContext(AuthContext);

    useEffect(()=>{
        getWeek();
    }, [])

    useEffect(()=>{
        getWeek();
    }, [currentWeek])

    const getWeek = () => {
        const weekNumber = formatCurrentWeek();
        const weekData = weeks.find(week => week.week === weekNumber);
        if(weekData){
            setIsWeekExists(true);
        }
        else{
            setIsWeekExists(false);
        }
    }

    const handleSendData = () => {
        const dataToSend = {
            name : name,
            week: formatCurrentWeek(), // Форматируем текущую неделю
            shifts: selectedShifts,    // Выбранные смены
        };
        console.log(dataToSend);
        if(!isWeekExists){
            addWeeks(dataToSend);
            handleSave();
        }
        else{
            const weekIndex = weeks.findIndex(week => week.week === dataToSend.week);
            updateWeeks(weekIndex, dataToSend);
            handleSave();
        }

    
        //sendDataToBackend(dataToSend); // Отправляем данные на сервер
    };

    return(
        <div className="schedule-filling-container">
            <div className="shedule-filling-table">
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
                        <tr>
                            <td>1 смена</td>
                            <td><input type="checkbox" checked={selectedShifts.Monday === 1} onChange={() => handleShiftChange('Monday', 1)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Tuesday === 1} onChange={() => handleShiftChange('Tuesday', 1)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Wednesday === 1} onChange={() => handleShiftChange('Wednesday', 1)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Thursday === 1} onChange={() => handleShiftChange('Thursday', 1)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Friday === 1} onChange={() => handleShiftChange('Friday', 1)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Saturday === 1} onChange={() => handleShiftChange('Saturday', 1)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Sunday === 1} onChange={() => handleShiftChange('Sunday', 1)} /></td>
                        </tr>
                        <tr>
                            <td>2 смена</td>
                            <td><input type="checkbox" checked={selectedShifts.Monday === 2} onChange={() => handleShiftChange('Monday', 2)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Tuesday === 2} onChange={() => handleShiftChange('Tuesday', 2)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Wednesday === 2} onChange={() => handleShiftChange('Wednesday', 2)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Thursday === 2} onChange={() => handleShiftChange('Thursday', 2)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Friday === 2} onChange={() => handleShiftChange('Friday', 2)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Saturday === 2} onChange={() => handleShiftChange('Saturday', 2)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Sunday === 2} onChange={() => handleShiftChange('Sunday', 2)} /></td>
                        </tr>
                        <tr>
                            <td>3 смена</td>
                            <td><input type="checkbox" checked={selectedShifts.Monday === 3} onChange={() => handleShiftChange('Monday', 3)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Tuesday === 3} onChange={() => handleShiftChange('Tuesday', 3)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Wednesday === 3} onChange={() => handleShiftChange('Wednesday', 3)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Thursday === 3} onChange={() => handleShiftChange('Thursday', 3)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Friday === 3} onChange={() => handleShiftChange('Friday', 3)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Saturday === 3} onChange={() => handleShiftChange('Saturday', 3)} /></td>
                            <td><input type="checkbox" checked={selectedShifts.Sunday === 3} onChange={() => handleShiftChange('Sunday', 3)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="shedule-filling-week-swap">
                <button onClick={goToPreviousWeek}>
                    <img src={left_arrow} alt="leftarrow"/>
                </button>
                <p>{formatCurrentWeek()}</p>
                <button onClick={goToNextWeek}>
                    <img src={right_arrow} alt="rightarrow"/>
                </button>
            </div>
            <div className="shedule-filling-week-save">
                {isWeekExists && <button onClick={handleSendData}>Редактировать</button>}
                {!isWeekExists && <button onClick={handleSendData}>Сохранить</button>}
                
            </div>
        </div>
    )
}

export default ScheduleFilling;
