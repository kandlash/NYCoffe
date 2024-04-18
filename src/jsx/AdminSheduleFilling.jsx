import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import left_arrow from "../images/left_arrow.svg";
import right_arrow from "../images/right_arrow.svg";

const AdminSheduleFilling = ({ onSave }) => {
  // State for storing selected shifts
  const [selectedShifts, setSelectedShifts] = useState({
    Monday: [[], [], []],
    Tuesday: [[], [], []],
    Wednesday: [[], [], []],
    Thursday: [[], [], []],
    Friday: [[], [], []],
    Saturday: [[], [], []],
    Sunday: [[], [], []],
  });

  const [backData, setBackData] = useState([]);

  // State for storing the current displayed week
  const [currentWeek, setCurrentWeek] = useState(moment().startOf("isoWeek"));

  // Function to go to the previous week
  const goToPreviousWeek = () => {
    setSelectedShifts({}); // Clear selected shifts
    setCurrentWeek((prevWeek) => prevWeek.clone().subtract(1, "week"));
  };

  // Function to go to the next week
  const goToNextWeek = () => {
    setSelectedShifts({}); // Clear selected shifts
    setCurrentWeek((prevWeek) => prevWeek.clone().add(1, "week"));
  };

  // Function to format the current week
  const formatCurrentWeek = useCallback(() => {
    const startOfWeek = currentWeek.startOf("isoWeek").format("DD.MM.YYYY");
    const endOfWeek = currentWeek.endOf("isoWeek").format("DD.MM.YYYY");
    return `${startOfWeek}-${endOfWeek}`;
  }, [currentWeek]);

  // Function to fetch data from the backend
  const fetchData = useCallback(() => {
    const cw = formatCurrentWeek();
    let backendData = [];

    if (cw === "15.04.2024-21.04.2024") {
      backendData = [
        { employe_name: "Кириллов Кирилл Кириллович", day: "Monday", shift: 1 },
        { employe_name: "Чурилов Чурил Чурилович", day: "Tuesday", shift: 2 },
        { employe_name: "Кириллов Кирилл Кириллович", day: "Tuesday", shift: 3 },
        { employe_name: "Жуков Жук Жукович", day: "Tuesday", shift: 2 },
        { employe_name: "Петров Петр Петрович", day: "Friday", shift: 1 },
      ];
    } else if (cw === "08.04.2024-14.04.2024") {
      backendData = [
        { employe_name: "Кириллов Кирилл Кириллович", day: "Monday", shift: 3 },
        { employe_name: "Чурилов Чурил Чурилович", day: "Tuesday", shift: 3 },
        { employe_name: "Кириллов Кирилл Кириллович", day: "Tuesday", shift: 3 },
        { employe_name: "Жуков Жук Жукович", day: "Tuesday", shift: 1 },
        { employe_name: "Петров Петр Петрович", day: "Friday", shift: 1 },
      ];
    } else if (cw === "22.04.2024-28.04.2024") {
      backendData = [
        { employe_name: "Кириллов Кирилл Кириллович", day: "Friday", shift: 2 },
        { employe_name: "Чурилов Чурил Чурилович", day: "Monday", shift: 1 },
        { employe_name: "Кириллов Кирилл Кириллович", day: "Tuesday", shift: 3 },
        { employe_name: "Жуков Жук Жукович", day: "Tuesday", shift: 2 },
        { employe_name: "Петров Петр Петрович", day: "Friday", shift: 1 },
      ];
    }
    console.log("fetched data: " + backendData);
    // Update the state with fetched data
    setSelectedShifts(initializeSelectedShifts(backendData));
    setBackData(backendData);
  }, [formatCurrentWeek]);

  // Function to initialize selectedShifts state
  const initializeSelectedShifts = (data) => {
    const selectedShifts = {
      Monday: [[], [], []],
      Tuesday: [[], [], []],
      Wednesday: [[], [], []],
      Thursday: [[], [], []],
      Friday: [[], [], []],
      Saturday: [[], [], []],
      Sunday: [[], [], []],
    };

    data.forEach(({ employe_name, day, shift }) => {
      const index = shift - 1;
      selectedShifts[day][index].push(employe_name);
    });

    return selectedShifts;
  };

  // Function to handle select change
  const handleSelectChange = (event, day, shift) => {
    const { value } = event.target;
    setSelectedShifts((prevSelectedShifts) => {
      const newSelectedShifts = { ...prevSelectedShifts };
      newSelectedShifts[day][shift - 1] = value ? [value] : [];
      return newSelectedShifts;
    });
  };

  // Function to send data to the backend
  const handleSendData = () => {
    const dataToSend = {
      week: formatCurrentWeek(), // Format current week
      shifts: selectedShifts, // Selected shifts
    };
    console.log("Saved data:", dataToSend);
    const data = {
      text: "Заполнен график на неделю: ",
      date: formatCurrentWeek(),
    };
    onSave(data); // Call the callback and pass the data
    //sendDataToBackend(dataToSend); // Send data to server
  };

  // Fetch data from the backend
  useEffect(() => {
    console.log("обновили страницу!");
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log("изменили неделю!");
    fetchData();
  }, [currentWeek, fetchData]);

  return (
    <div className="admin-shifts-wrapper">
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
              {[1, 2, 3].map((shift) => (
                <tr key={shift}>
                  <td>{shift} смена</td>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <td key={`${day}-${shift}`}>
                      <select onChange={(event) => handleSelectChange(event, day, shift)}>
                        <option value="">Выберите сотрудника</option>
                        {backData && backData.map((employee, index) => {
                          if (employee.day === day && employee.shift === shift) {
                            return <option key={`${employee.id}-${day}-${shift}-${index}`}>{employee.employe_name}</option>;
                          }
                          return null;
                        })}
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
            <img src={left_arrow} alt="leftarrow" />
          </button>
          <p>{formatCurrentWeek()}</p>
          <button onClick={goToNextWeek}>
            <img src={right_arrow} alt="rightarrow" />
          </button>
        </div>
        <div className="shedule-filling-week-save">
          <button onClick={handleSendData}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AdminSheduleFilling;
