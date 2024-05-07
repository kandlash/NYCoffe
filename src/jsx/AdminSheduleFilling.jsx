import React, { useState, useEffect, useCallback, useContext, useMemo } from "react";
import moment from "moment";
import left_arrow from "../images/left_arrow.svg";
import right_arrow from "../images/right_arrow.svg";
import AuthContext from "./AuthContext";

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

  const { weeks, adminWeeks, changeAdminWeek, addAdminWeek } = useContext(AuthContext);

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
    weeks.forEach(element => {
      if (element.week === cw) {
          let name = element.name;
          let shifts = element.shifts;
          console.log(shifts);
          Object.entries(shifts).forEach(([day, shift]) => {
            backendData.push({ name: name, day: day, shift: shift });
          });
      }
  });
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


  const handleSelectChange = (event, day, shift) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const employeeName = selectedOption ? selectedOption.text : '';
    console.log(employeeName);
  
    setSelectedShifts((prevSelectedShifts) => {
      const newSelectedShifts = { ...prevSelectedShifts };
      newSelectedShifts[day][shift - 1] = employeeName ? [employeeName] : [];
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
    const cw = formatCurrentWeek();
    let flag;
    const index_ = adminWeeks.findIndex((week) => week.week === cw);
    if (index_ !== -1) {
      flag = true;
    }
    
    if(flag){
      changeAdminWeek(index_, dataToSend);
    }
    else{
      addAdminWeek(dataToSend);
    }


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

  const calculateNormShifts = useCallback(() => {
    const normShifts = {
      Monday: [0, 0, 0],
      Tuesday: [0, 0, 0],
      Wednesday: [0, 0, 0],
      Thursday: [0, 0, 0],
      Friday: [0, 0, 0],
      Saturday: [0, 0, 0],
      Sunday: [0, 0, 0],
    };

    backData.forEach((employee) => {
      const dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(employee.day);
      const shiftIndex = employee.shift - 1;

      if (dayIndex !== -1 && shiftIndex !== -1) {
        normShifts[["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex]][shiftIndex]++;
      }
    });

    return normShifts;
  }, [backData]);

  // Calculate normShifts when backData changes
  const normShifts = useMemo(() => calculateNormShifts(), [backData, calculateNormShifts]);

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
                  <option>{normShifts[day][shift - 1]}</option>
                  {backData.map((employee, index) => {
                    if (employee.day === day && employee.shift === shift) {
                      return <option key={`${employee.id}-${day}-${shift}-${index}`}>{employee.name}</option>;
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
