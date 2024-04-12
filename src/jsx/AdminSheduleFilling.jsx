import React, { useState, useEffect } from "react";
import moment from "moment";
import left_arrow from "../images/left_arrow.svg";
import right_arrow from "../images/right_arrow.svg";

const AdminSheduleFilling = () => {
    // Состояние для хранения выбранных смен
    const [selectedShifts, setSelectedShifts] = useState({
        Monday: [[], [], []],
        Tuesday: [[], [], []],
        Wednesday: [[], [], []],
        Thursday: [[], [], []],
        Friday: [[], [], []],
        Saturday: [[], [], []],
        Sunday: [[], [], []]
    });

    // Состояние для хранения текущей отображаемой недели
    const [currentWeek, setCurrentWeek] = useState(moment().startOf('isoWeek'));

    // Состояние для списка доступных сотрудников
    const [availableEmployees, setAvailableEmployees] = useState([]);

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

    // Получение данных с бэкэнда
    useEffect(() => {
        // Здесь ваш код для получения данных с бэкэнда
        const backendData = [
            {employe_name: "Кириллов Кирилл Кириллович", day: "Monday", shift:1},
            {employe_name: "Чурилов Чурил Чурилович", day: "Tuesday", shift:2},
            {employe_name: "Кириллов Кирилл Кириллович", day: "Tuesday", shift:3},
            {employe_name: "Жуков Жук Жукович", day: "Tuesday", shift:2},
            {employe_name: "Петров Петр Петрович", day: "Friday", shift:1}
        ];

        // Обновление списка доступных сотрудников
        const employees = backendData.map(data => data.employe_name);
        setAvailableEmployees(employees);

        // Обновление состояния selectedShifts
        const updatedSelectedShifts = {
            Monday: [[], [], []],
            Tuesday: [[], [], []],
            Wednesday: [[], [], []],
            Thursday: [[], [], []],
            Friday: [[], [], []],
            Saturday: [[], [], []],
            Sunday: [[], [], []]
        };

        backendData.forEach(data => {
            const { employe_name, day, shift } = data;
            const index = shift - 1;
            if (employees.includes(employe_name)) {
                if (!updatedSelectedShifts[day][index].includes(employe_name)) {
                    updatedSelectedShifts[day][index].push(employe_name);
                }
            }
        });

        setSelectedShifts(updatedSelectedShifts);
    }, []);

    // Функция для обновления выбранной смены
    const handleShiftChange = (day, index, employee) => {
        setSelectedShifts(prevState => {
            const newState = { ...prevState };
            newState[day][index] = [employee];
            return newState;
        });
    };

    // Функция для отправки данных на бэкэнд
    const handleSendData = () => {
        const dataToSend = {
            week: formatCurrentWeek(), // Форматируем текущую неделю
            shifts: selectedShifts    // Выбранные смены
        };
        console.log(dataToSend);
    
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
                        {[1, 2, 3].map(shift => (
                            <tr key={shift}>
                                <td>{shift} смена</td>
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                    <td key={`${day}-${shift}`}>
                                        <select value={selectedShifts[day][shift-1][0] || ""} onChange={(e) => handleShiftChange(day, shift-1, e.target.value)} style={{backgroundColor: selectedShifts[day][shift-1][0] ? 'green' : 'white'}}>
                                            <option value="">Выберите сотрудника</option>
                                            {availableEmployees.filter(employee => selectedShifts[day][shift-1].includes(employee)).map((employee, index) => (
                                                <option key={index} value={employee}>{employee}</option>
                                            ))}
                                        </select>
                                    </td>
                                ))}
                            </tr>
                        ))}
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
                <button onClick={handleSendData}>Сохранить</button>
            </div>
        </div>
    )
}

export default AdminSheduleFilling;
